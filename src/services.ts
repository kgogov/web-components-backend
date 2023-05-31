import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { ObjectId } from "mongodb";
import { Form } from "./entity/Form";
import { UserDto } from "./dto/users.dto";

export class DataServices {
	constructor() {
		AppDataSource.initialize().then(async () => {
			this.databaseConnection = AppDataSource;
		}).catch(error => console.log(error));
	}

	private databaseConnection: DataSource | null = null;

	public async getAllUsers(): Promise<UserDto[]> {
		return await this.databaseConnection?.manager.find(User).then(users => users.map(user => new UserDto(user)));
	}

	public async getUserById(id: string): Promise<User | undefined> {
		return await this.databaseConnection?.getMongoRepository(User).findOneBy({ _id: new ObjectId(id)});
	}

	public async getAllForms(): Promise<Form[]> {
		return await this.databaseConnection?.manager.find(Form);
	}

	public async getFormByName(name: string): Promise<Form | undefined> {
		return await this.databaseConnection?.getMongoRepository(Form).findOneBy({ name });
	}
}