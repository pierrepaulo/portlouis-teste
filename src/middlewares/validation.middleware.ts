import { Request, Response, NextFunction } from "express";

function isValidNome(nome: string): boolean {
  const words = nome.trim().split(/\s+/);
  return words.length >= 2 && words.every((word) => word.length >= 3);
}

export function validateCreateContato(req: Request, res: Response, next: NextFunction): void {
  const { nome, telefone } = req.body;

  if (!nome || typeof nome !== "string") {
    res.status(400).json({ error: "Nome é obrigatório" });
    return;
  }

  if (!isValidNome(nome)) {
    res.status(400).json({ error: "Nome deve ter pelo menos 2 palavras, cada uma com no mínimo 3 caracteres" });
    return;
  }

  if (!telefone || typeof telefone !== "string") {
    res.status(400).json({ error: "Telefone é obrigatório" });
    return;
  }

  next();
}

export function validateUpdateContato(req: Request, res: Response, next: NextFunction): void {
  const { nome, telefone } = req.body;

  if (nome !== undefined && !isValidNome(nome)) {
    res.status(400).json({ error: "Nome deve ter pelo menos 2 palavras, cada uma com no mínimo 3 caracteres" });
    return;
  }

  if (telefone !== undefined && typeof telefone !== "string") {
    res.status(400).json({ error: "Telefone deve ser uma string" });
    return;
  }

  next();
}
