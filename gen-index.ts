import { readdir, writeFile } from 'fs/promises';
import { existsSync, lstatSync } from 'fs';
import { join, relative, basename } from 'path';

const srcDir = join(import.meta.dir, 'src');
const indexFile = join(srcDir, 'index.ts');

let content = '// Этот файл генерируется автоматически. Не редактируйте его вручную.\n\n';

async function findDirectories(startPath: string): Promise<string[]> {
    if (!existsSync(startPath)) {
        console.log("Директория не найдена: ", startPath);
        return [];
    }

    const items = await readdir(startPath);
    return items.filter(item => lstatSync(join(startPath, item)).isDirectory());
}

async function findFiles(startPath: string, filter: RegExp): Promise<string[]> {
    if (!existsSync(startPath)) {
        console.log("Директория не найдена: ", startPath);
        return [];
    }

    const files = await readdir(startPath);
    const results: string[] = [];

    for (const file of files) {
        const filename = join(startPath, file);
        const stat = lstatSync(filename);
        if (stat.isDirectory()) {
            results.push(...await findFiles(filename, filter));
        } else if (filter.test(filename)) {
            results.push(filename);
        }
    }

    return results;
}

async function generateIndex() {
    const directories = await findDirectories(srcDir);

    for (const dir of directories) {
        const dirPath = join(srcDir, dir);
        let dirExports: string[] = [];

        content += `// ${dir}\n`;
        const files = await findFiles(dirPath, /\.ts$/);

        // Создаем подмодуль для каждой директории
        content += `export * as ${dir.replace(/-/g, '_')} from './${dir}';\n\n`;

        // Создаем отдельный файл для каждого подмодуля
        let subModuleContent = '';
        for (const filename of files) {
            if (basename(filename) === 'index.ts' || filename.endsWith('.client.ts')) {
                continue;
            }
            const relativePath = relative(dirPath, filename)
                .replace(/\\/g, '/') // Заменяем обратные слеши на прямые для Windows
                .replace(/\.ts$/, ''); // Удаляем расширение .ts
            subModuleContent += `export * from './${relativePath}';\n`;
        }

        // Записываем содержимое подмодуля в отдельный файл
        const subModuleFile = join(dirPath, 'index.ts');
        await writeFile(subModuleFile, subModuleContent, 'utf8');
    }

    await writeFile(indexFile, content.trim() + '\n', 'utf8');
    console.log(`Файл ${indexFile} успешно сгенерирован.`);
}

generateIndex().catch(console.error);