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
