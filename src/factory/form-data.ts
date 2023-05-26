import { Form } from "../entity/Form";

// Think about using faker.js to generate random data
export const FormData: Partial<Form>[] = [
	{
		name: 'Form 1',
		fields: ['firstName', 'lastName', 'email', 'country']
	},
	{
		name: 'Form 2',
		fields: ['firstName', 'lastName']
	},
	{
		name: 'Form 3',
		fields: ['personalInfoTitle', 'firstName', 'middleName', 'lastName', 'email', 'date', 'age', 'additionalInfoTitle', 'country', 'currency', 'otherLanguages', 'languages', 'places', 'working_hours', 'feedback', 'newsletter', 'rating']
	}
];
