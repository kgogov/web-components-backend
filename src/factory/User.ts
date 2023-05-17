import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { User } from "../entity/User";
import { Currency } from "../enums/Currency.enum";
import { Options } from "../enums/Options.enum";
import { ObjectId } from "mongodb";

export const userFactory = Factory.define<User>(() => new User({
	id: new ObjectId(),
	firstName: faker.person.firstName(),
	middleName: faker.person.middleName(),
	lastName: faker.person.lastName(),
	age: faker.number.int({ min: 18, max: 99 }),
	email: faker.internet.email(),
	date: faker.date.past(),
	country: faker.location.countryCode(),
	currency: faker.helpers.enumValue(Currency),
	languages: faker.helpers.arrayElements([
		'bg', 'en', 'fr', 'de', 'it', 'es', 'zl'
	], {
		min: 1,
		max: 5
	}),
	otherLanguages: faker.helpers.enumValue(Options),
	newsletter: faker.helpers.enumValue(Options),
	places: faker.helpers.arrayElements([
		'bg', 'en', 'fr', 'de', 'it', 'es', 'zl'
	], {
		min: 1,
		max: 5
	}),
	working_hours: [8, 17],
	rating: faker.number.float({ min: 1, max: 10, precision: 0.01 })
}));