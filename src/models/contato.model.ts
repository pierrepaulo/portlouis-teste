export interface Contato {
  id: number;
  nome: string;
  telefone: string;
  created_at: Date;
}

export interface CreateContatoDTO {
  nome: string;
  telefone: string;
}
