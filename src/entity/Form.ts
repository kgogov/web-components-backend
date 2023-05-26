import { Entity, Column, ObjectIdColumn, ObjectId } from "typeorm";

@Entity()
export class Form {

	constructor(obj?: Partial<Form>) {
		Object.assign(this, obj)
	}

	@ObjectIdColumn()
	id: ObjectId;

	@Column()
	name: string;

	@Column()
	fields: string[];
}