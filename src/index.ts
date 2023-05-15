import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { userFactory } from "./factory/User";

AppDataSource.initialize().then(async () => {
	const users: User[] = [
		new User(userFactory.build()),
		new User(userFactory.build()),
		new User(userFactory.build())
	];

	console.log('Saving users...');
	console.log(users);

	users.forEach(async user => await AppDataSource.manager.save(user));

	console.log('Users saved successfully');
}).catch(error => console.log(error))