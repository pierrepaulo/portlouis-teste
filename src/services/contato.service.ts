import { Contato, CreateContatoDTO } from "../models/contato.model";
import * as repository from "../repositories/contato.repository";

export async function create(data: CreateContatoDTO): Promise<Contato> {
  return repository.create(data);
}
