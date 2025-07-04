// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "space/employees.proto" (package "space", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../google/protobuf/timestamp";
/**
 * @generated from protobuf message space.Employee
 */
export interface Employee {
    /**
     * @generated from protobuf field: int32 id = 1
     */
    id: number;
    /**
     * @generated from protobuf field: string username = 2
     */
    username: string;
    /**
     * @generated from protobuf field: string first_name = 3
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 4
     */
    lastName: string;
    /**
     * @generated from protobuf field: string email = 5
     */
    email: string;
    /**
     *  optional bytes image_uuid = 6;
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 8
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp blocked_at = 9
     */
    blockedAt?: Timestamp;
}
/**
 * @generated from protobuf message space.GetEmployeesParams
 */
export interface GetEmployeesParams {
}
/**
 * @generated from protobuf message space.GetEmployeesResponse
 */
export interface GetEmployeesResponse {
    /**
     * @generated from protobuf field: repeated space.Employee list = 1
     */
    list: Employee[];
}
/**
 * @generated from protobuf message space.CreateEmployeeParams
 */
export interface CreateEmployeeParams {
    /**
     * @generated from protobuf field: string username = 2
     */
    username: string;
    /**
     * @generated from protobuf field: string first_name = 3
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 4
     */
    lastName: string;
    /**
     * @generated from protobuf field: string email = 5
     */
    email: string;
}
/**
 * @generated from protobuf message space.UpdateEmployeeParams
 */
export interface UpdateEmployeeParams {
    /**
     * @generated from protobuf field: int32 id = 1
     */
    id: number;
    /**
     * @generated from protobuf field: string first_name = 2
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 3
     */
    lastName: string;
    /**
     * @generated from protobuf field: string email = 4
     */
    email: string; //  optional bytes image_uuid = 5;
}
/**
 * @generated from protobuf message space.CheckEmployeeAvailableUsernameParams
 */
export interface CheckEmployeeAvailableUsernameParams {
    /**
     * @generated from protobuf field: string username = 1
     */
    username: string;
}
/**
 * @generated from protobuf message space.BlockEmployeeParams
 */
export interface BlockEmployeeParams {
    /**
     * @generated from protobuf field: int32 id = 1
     */
    id: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Employee$Type extends MessageType<Employee> {
    constructor() {
        super("space.Employee", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 8, name: "updated_at", kind: "message", T: () => Timestamp },
            { no: 9, name: "blocked_at", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<Employee>): Employee {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        message.username = "";
        message.firstName = "";
        message.lastName = "";
        message.email = "";
        if (value !== undefined)
            reflectionMergePartial<Employee>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Employee): Employee {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string first_name */ 3:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 4:
                    message.lastName = reader.string();
                    break;
                case /* string email */ 5:
                    message.email = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 7:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp updated_at */ 8:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
                    break;
                case /* optional google.protobuf.Timestamp blocked_at */ 9:
                    message.blockedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.blockedAt);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Employee, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string first_name = 3; */
        if (message.firstName !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 4; */
        if (message.lastName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.lastName);
        /* string email = 5; */
        if (message.email !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.email);
        /* google.protobuf.Timestamp created_at = 7; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp updated_at = 8; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp blocked_at = 9; */
        if (message.blockedAt)
            Timestamp.internalBinaryWrite(message.blockedAt, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.Employee
 */
export const Employee = new Employee$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetEmployeesParams$Type extends MessageType<GetEmployeesParams> {
    constructor() {
        super("space.GetEmployeesParams", []);
    }
    create(value?: PartialMessage<GetEmployeesParams>): GetEmployeesParams {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetEmployeesParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetEmployeesParams): GetEmployeesParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetEmployeesParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.GetEmployeesParams
 */
export const GetEmployeesParams = new GetEmployeesParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetEmployeesResponse$Type extends MessageType<GetEmployeesResponse> {
    constructor() {
        super("space.GetEmployeesResponse", [
            { no: 1, name: "list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => Employee }
        ]);
    }
    create(value?: PartialMessage<GetEmployeesResponse>): GetEmployeesResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.list = [];
        if (value !== undefined)
            reflectionMergePartial<GetEmployeesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetEmployeesResponse): GetEmployeesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated space.Employee list */ 1:
                    message.list.push(Employee.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetEmployeesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated space.Employee list = 1; */
        for (let i = 0; i < message.list.length; i++)
            Employee.internalBinaryWrite(message.list[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.GetEmployeesResponse
 */
export const GetEmployeesResponse = new GetEmployeesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateEmployeeParams$Type extends MessageType<CreateEmployeeParams> {
    constructor() {
        super("space.CreateEmployeeParams", [
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateEmployeeParams>): CreateEmployeeParams {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        message.firstName = "";
        message.lastName = "";
        message.email = "";
        if (value !== undefined)
            reflectionMergePartial<CreateEmployeeParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateEmployeeParams): CreateEmployeeParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string first_name */ 3:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 4:
                    message.lastName = reader.string();
                    break;
                case /* string email */ 5:
                    message.email = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateEmployeeParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string first_name = 3; */
        if (message.firstName !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 4; */
        if (message.lastName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.lastName);
        /* string email = 5; */
        if (message.email !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.email);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.CreateEmployeeParams
 */
export const CreateEmployeeParams = new CreateEmployeeParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateEmployeeParams$Type extends MessageType<UpdateEmployeeParams> {
    constructor() {
        super("space.UpdateEmployeeParams", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateEmployeeParams>): UpdateEmployeeParams {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        message.firstName = "";
        message.lastName = "";
        message.email = "";
        if (value !== undefined)
            reflectionMergePartial<UpdateEmployeeParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateEmployeeParams): UpdateEmployeeParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string first_name */ 2:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 3:
                    message.lastName = reader.string();
                    break;
                case /* string email */ 4:
                    message.email = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateEmployeeParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string first_name = 2; */
        if (message.firstName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 3; */
        if (message.lastName !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.lastName);
        /* string email = 4; */
        if (message.email !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.email);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.UpdateEmployeeParams
 */
export const UpdateEmployeeParams = new UpdateEmployeeParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckEmployeeAvailableUsernameParams$Type extends MessageType<CheckEmployeeAvailableUsernameParams> {
    constructor() {
        super("space.CheckEmployeeAvailableUsernameParams", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CheckEmployeeAvailableUsernameParams>): CheckEmployeeAvailableUsernameParams {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        if (value !== undefined)
            reflectionMergePartial<CheckEmployeeAvailableUsernameParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckEmployeeAvailableUsernameParams): CheckEmployeeAvailableUsernameParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CheckEmployeeAvailableUsernameParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.CheckEmployeeAvailableUsernameParams
 */
export const CheckEmployeeAvailableUsernameParams = new CheckEmployeeAvailableUsernameParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockEmployeeParams$Type extends MessageType<BlockEmployeeParams> {
    constructor() {
        super("space.BlockEmployeeParams", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<BlockEmployeeParams>): BlockEmployeeParams {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        if (value !== undefined)
            reflectionMergePartial<BlockEmployeeParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlockEmployeeParams): BlockEmployeeParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BlockEmployeeParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message space.BlockEmployeeParams
 */
export const BlockEmployeeParams = new BlockEmployeeParams$Type();
