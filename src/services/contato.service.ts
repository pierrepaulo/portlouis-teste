import { Contato, CreateContatoDTO, UpdateContatoDTO } from "../models/contato.model";
import * as repository from "../repositories/contato.repository";

export async function getAll(): Promise<Contato[]> {
  return repository.findAll();
}

export async function create(data: CreateContatoDTO): Promise<Contato> {
  return repository.create(data);
}

export async function update(id: number, data: UpdateContatoDTO): Promise<Contato | null> {
  const existing = await repository.findById(id);
  if (!existing) return null;
  return repository.update(id, data);
}

export async function remove(id: number): Promise<boolean> {
  return repository.remove(id);
}
