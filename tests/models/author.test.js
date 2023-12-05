// import mongoose from 'mongoose';
import { author, authorSchema } from '../../src/models/Author.js';

describe('Author Model Test', () => {
  it('should be invalid if nome is empty', async () => {
    const invalidAuthor = new author({ nome: '', nacionalidade: 'Brasileira' });
    let error;

    try {
      await invalidAuthor.validate();
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.errors.nome).toBeDefined();
  });

  it('should be valid with nome and nacionalidade', async () => {
    const validAuthor = new author({ nome: 'John Doe', nacionalidade: 'American' });
    let error;

    try {
      await validAuthor.validate();
    } catch (e) {
      error = e;
    }

    expect(error).toBeUndefined();
  });

  it('should be valid if all required fields are provided', async () => {
    const validAuthor = new author({ nome: 'Jane Doe', nacionalidade: 'Canadian' });
    let error;

    try {
      await validAuthor.validate();
    } catch (e) {
      error = e;
    }

    expect(error).toBeUndefined();
  });
});
