import { Entity, Column, ObjectIdColumn } from "typeorm";
import { FieldTypeEnum } from "../enums/FieldType.enum";
import { ObjectId } from "mongodb";

@Entity()
export class Field {

	constructor(obj?: Partial<Field>) {
		Object.assign(this, obj)
	}

	@ObjectIdColumn()
	id: ObjectId;

	@Column()
	name: string;

	@Column()
	labelContent?: string;

	@Column()
	helperText?: string;

	@Column()
	isError?: boolean;

	@Column()
	isRequired?: boolean;

	@Column()
	isDisabled?: boolean;

	@Column()
	isHidden?: boolean;

	@Column()
	type: FieldTypeEnum;

	@Column()
	value?: string | number | string[] | number[];

	@Column()
	placeholder?: string;

	@Column()
	options?: {
		id: string;
		value: string;
	}[]

	@Column()
	validation?: {
		min?: string | number;
		max?: string | number;
	}

	@Column()
	dependantField?: {
		name: string;
		action: string;
	}
}