import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const clusterUrl = process.env.DB_CLUSTER_URL;

export const AppDataSource = new DataSource({
	"type": "mongodb",
	"url": `mongodb+srv://${dbUsername}:${dbPassword}@${clusterUrl}/?retryWrites=true&w=majority`,
	"useNewUrlParser": true,
	"synchronize": true,
	"logging": true,
	"entities": ["src/entity/*.ts"],
	"database": "webcomponents-db",
});