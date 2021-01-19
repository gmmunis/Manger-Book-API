import { getRepository } from 'typeorm';
import { Books } from '../entity/Books';
import { Request, Response } from 'express';

export const getBooks = async (request: Request, response: Response) => {
    const books = await getRepository(Books).find();
    return response.json(books);
};

export const saveBook = async (request: Request, response: Response) => {
   const book = await getRepository(Books).save(request.body);
   response.json(book);
   return response.json(book);
};

export const getBook = async (request: Request, response: Response) => {
    const { id } = request.params;
    const book = await getRepository(Books).findOne(id);
    return response.json(book);
};

export const updateBook = async (request: Request, response: Response) => {
    const { id } = request.params;
    const book = await getRepository(Books).update(id, request.body);

    if(book.affected === 1) {
        const bookUpdated = await getRepository(Books).findOne(id);
        return response.json(bookUpdated);
    }

    return response.status(404).json({ message: 'Book not found!'});
};

export const removeBook = async (request: Request, response: Response) => {
    const { id } = request.params;
    const book = await getRepository(Books).delete(id);

    if(book.affected === 1) {
        const bookRemoved = await getRepository(Books).findOne(id);
        return response.json({ message: 'Book removed!' });
    }

    return response.status(404).json({ message: 'Book not found!' });
};