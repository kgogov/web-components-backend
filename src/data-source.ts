import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

export const AppDataSource = new DataSource({
	"type": "mongodb",
	"url": `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.prpivb3.mongodb.net/?retryWrites=true&w=majority`,
	"useNewUrlParser": true,
	"synchronize": true,
	"logging": true,
	"entities": ["src/entity/*.ts"],
	"database": "webcomponents-db",
});