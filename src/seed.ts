import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { userFactory } from "./factory/User";
import { fieldsData } from "./factory/field-data";
import { Field } from "./entity/Field";
import { Form } from "./entity/Form";
import { FormData } from "./factory/form-data";

AppDataSource.initialize().then(async () => {
	//removing old users
	try {
		await AppDataSource.manager.clear(User);
		await AppDataSource.manager.clear(Field);
		await AppDataSource.manager.clear(Form);
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

	// create new form fields
	await AppDataSource.manager.save(fieldsData.map(fieldData => new Field(fieldData)));
	console.log('Fields saved successfully:', fieldsData.map((field, index) => `${index + 1}.${field.name}`));

	// create new forms
	await AppDataSource.manager.save(FormData.map(formData => new Form(formData)));
	console.log('Forms saved successfully:', FormData.map((form, index) => `${form.name}`));

	process.exit();

}).catch(error => console.log(error));