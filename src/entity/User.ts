import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";
import { Currency } from "../enums/Currency.enum";
import { Options } from "../enums/Options.enum";

// TODO: Make new entity for Form and Field

@Entity()
export class User {

	constructor(obj?: Partial<User>) {
		Object.assign(this, obj)
	}

	@ObjectIdColumn()
	id: ObjectId;

	@Column()
	firstName: string;

	@Column()
	middleName?: string;

	@Column()
	lastName: string;

	@Column()
	age: number;

	@Column()
	date: Date;

	@Column()
	email: string;

	@Column()
	country: string;

	@Column()
	currency: Currency;

	@Column()
	languages: string[];

	@Column()
	otherLanguages: Options;

	@Column()
	places: string[];

	@Column()
	newsletter?: Options;

	@Column()
	rating?: number;

	@Column()
	working_hours: number[];
}

