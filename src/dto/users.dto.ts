import { Entity, Column } from "typeorm";
import { User } from "../entity/User";

@Entity()
export class UserDto {

	constructor(obj: User) {
		this.id = obj.id.toString();
		this.firstName = obj.firstName;
		this.lastName = obj.lastName;
	}

	@Column()
	id: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;
}