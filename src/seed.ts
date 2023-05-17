import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { userFactory } from "./factory/User";

AppDataSource.initialize().then(async () => {
	//removing old users
	try {
		await AppDataSource.manager.clear(User);
	} catch (er) {
		console.log('User collection does not exist, CLEAR is skipped.');
	}

	//create new users
	const users: User[] = [
		userFactory.build(),
		userFactory.build(),
		userFactory.build(),
		userFactory.build(),
		userFactory.build()
	];

	await AppDataSource.manager.save(users);
	console.log('Users saved successfully:', users.map((user, index) => `${index + 1}.${user.firstName} ${user.lastName}`));
	
	process.exit();

}).catch(error => console.log(error));