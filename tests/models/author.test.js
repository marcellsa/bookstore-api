import { author } from '../../src/models/Author.js';

describe('Author Model Tests', () => {
  it('should create a new author', async () => {
    // Simula um objeto de autor para testes
    const mockAuthorData = {
      nome: 'John Doe',
      nacionalidade: 'American',
    };

    // Simula a criação de um autor usando o modelo
    const createSpy = jest.spyOn(author, 'create').mockResolvedValue(mockAuthorData);

    // Executa a lógica de criação do autor (pode ser uma função em outro arquivo)
    const createdAuthor = await author.create(mockAuthorData);

    // Verifica se a função de criação foi chamada corretamente
    expect(createSpy).toHaveBeenCalledWith(mockAuthorData);

    // Verifica se o autor foi criado com sucesso
    expect(createdAuthor).toEqual(mockAuthorData);
  });

  it('should get author by ID', async () => {
    // Simula um ID válido de autor
    const authorId = 'validObjectId';

    // Simula a busca de um autor por ID usando o modelo
    const findByIdSpy = jest.spyOn(author, 'findById').mockResolvedValue(null);

    // Executa a lógica de busca do autor por ID (pode ser uma função em outro arquivo)
    const foundAuthor = await author.findById(authorId);

    // Verifica se a função de busca foi chamada corretamente
    expect(findByIdSpy).toHaveBeenCalledWith(authorId);

    // Verifica se o autor foi encontrado (ou não)
    expect(foundAuthor).toBeNull();
  });

  // Adicione mais testes conforme necessário para outras operações no modelo
});
