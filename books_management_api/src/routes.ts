import { Router, Request, Response } from 'express';

import { getBooks, saveBook, getBook, updateBook, removeBook } from './controller/BooksController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Books!' });
});

routes.get('/books', getBooks);
routes.get('/books/:id', getBook);
routes.post('/books', saveBook);
routes.put('/books/:id', updateBook);
routes.delete('/books/:id', removeBook);

export default routes;