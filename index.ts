import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

const server = app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
  console.log('Press Ctrl+C to quit.');
});

