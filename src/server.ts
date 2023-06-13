import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { DataServices } from './services';
import { Form } from './entity/Form';
import { User } from './entity/User';
import { UserDto } from './dto/users.dto';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Field } from './entity/Field';

const jsonParser = bodyParser.json();

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT;

const services = new DataServices();

app.use(cors());

/* *ENDPOINTS* */

//GET - Test endpoint
app.get('/', (req: Request, res: Response) => {
	res.send('Server is running with Express and TypeScript');
});

app.get('/users', async (req: Request, res: Response) => {
	const users: UserDto[] = await services.getAllUsers();
	res.send(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
	let user: User;

	try {
		user = await services.getUserById(req.params.id);
	} catch (er) {
		console.log(er);
	}

	if (!user) {
		res.status(204);
		res.send(`User not found!`);
	} else {
		res.send(user);
	}
});

app.get('/forms', async (req: Request, res: Response) => {
	const forms: Form[] = await services.getAllForms();
	res.send(forms);
});

app.get('/forms/:name', async (req: Request, res: Response) => {
	let form: Form;
	let fields: Field[];

	try {
		form = await services.getFormByName(req.params.name);
		fields = await services.getFormFieldsByName(form.fields);
	} catch (er) {
		console.log(er);
	}

	if (!form) {
		res.status(204);
		res.send(`Form not found!`);
	} else {
		res.send(fields);
	}
});

app.post('/users/create', jsonParser, async (req: Request, res: Response) => {
	if (!Object.keys(req.body).length) {
		res.status(400);
		res.send(`User not created!`);
		return;
	}

	const createdUser: User | null = await services.createUser(req.body);

	if (!createdUser) {
		res.status(500);
		res.send(`User not created!`);
	} else {
		res.send(createdUser);
	}
});

app.put('/users/:id', jsonParser, async (req: Request, res: Response) => {
	if (!Object.keys(req.body).length) {
		res.status(400);
		res.send(`User not update!`);
		return;
	}

	const updatedUser: User | null = await services.updateUser(req.params.id, req.body);

	if (!updatedUser) {
		res.status(500);
		res.send(`User not update!`);
	} else {
		res.send(updatedUser);
	}
});

//Non existent endpoint
app.get('*', function (req: Request, res: Response) {
	res.status(404);
	res.send('Service not found!');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});