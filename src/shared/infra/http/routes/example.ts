import { Router } from 'express';
import { validateIdParam, validateId } from '@shared/validators/common';

const exampleRouter = Router();

// Exemplo de uso do middleware de validação
exampleRouter.get('/:id', validateIdParam(), (req, res) => {
  const { id } = req.params;
  // O ID já foi validado pelo middleware
  res.json({ message: `ID válido: ${id}` });
});

// Exemplo de uso da validação direta
exampleRouter.post('/validate-ids', (req, res) => {
  try {
    const { id } = req.body;
    const validatedId = validateId(id);
    res.json({ 
      message: 'ID válido',
      validatedId 
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ 
        error: 'Validation Error',
        message: error.message 
      });
    }
  }
});

export { exampleRouter }; 