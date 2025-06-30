// Paginação de entrada (query params padrão)
export interface IPaginationParams {
    page?: number;
    limit?: number;
    search?: string;
  }
  
  // Metadados de retorno
  export interface IPaginationMeta {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  }
  
  // Estrutura padrão de respostas paginadas
  export interface IPaginatedResult<T> {
    data: T[];
    pagination: IPaginationMeta;
  }