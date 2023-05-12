import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"

@Entity()
export class User {

	constructor(obj?: Partial<User>) {
		Object.assign(this, obj)
	}

	@ObjectIdColumn()
	id: ObjectId

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column()
	age: number

}

