import { Request, Response } from "express";
import * as service from "../services/contato.service";

export async function getAll(_req: Request, res: Response): Promise<void> {
  const contatos = await service.getAll();
  res.status(200).json(contatos);
}

export async function create(req: Request, res: Response): Promise<void> {
  const { nome, telefone } = req.body;
  const contato = await service.create({ nome, telefone });
  res.status(201).json(contato);
}

export async function update(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const contato = await service.update(id, req.body);

  if (!contato) {
    res.status(404).json({ error: "Contato não encontrado" });
    return;
  }

  res.status(200).json(contato);
}

export async function remove(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const deleted = await service.remove(id);

  if (!deleted) {
    res.status(404).json({ error: "Contato não encontrado" });
    return;
  }

  res.status(204).send();
}
