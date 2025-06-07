declare namespace Express {
  export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' 
  export interface Request {
    user: {
      id: string;
      name: string;
      role: string;
    };

  }
} 