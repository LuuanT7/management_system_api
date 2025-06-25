import { Request, Response } from "express";
import { UpdateActivityUseCase } from "../../../useCases/UpdateActivityUseCase";
import { IUpdateActivityDTO } from "../../../dtos/IUpdateActivityDTO";

export class UpdateActivityController {
  constructor(private updateActivityUseCase: UpdateActivityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const updateData: IUpdateActivityDTO = request.body;

    try {
      // Remove o ID do corpo se existir (evita conflito com o ID da rota)
      delete updateData.id;

      // Validação básica - verifica se há dados para atualizar
      if (Object.keys(updateData).length === 0) {
        return response.status(400).json({
          message: "Nenhum dado fornecido para atualização",
        });
      }

      // Corrigido: passa id e updateData como argumentos separados
      const updatedActivity = await this.updateActivityUseCase.execute(id, updateData);

      return response.status(200).json(updatedActivity);
    } catch (error) {
      return response.status(error.statusCode || 400).json({
        message: error.message || "Erro inesperado ao atualizar atividade",
      });
    }
  }
}