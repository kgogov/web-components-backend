import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { DataServices } from './services';
import { Form } from './entity/Form';
import { User } from './entity/User';
import { UserDto } from './dto/users.dto';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT;

const services = new DataServices();

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

	try {
		form = await services.getFormByName(req.params.name);
	} catch (er) {
		console.log(er);
	}

	if (!form) {
		res.status(204);
		res.send(`Form not found!`);
	} else {
		res.send(form);
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