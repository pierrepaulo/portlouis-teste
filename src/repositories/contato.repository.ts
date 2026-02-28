import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../config/database";
import { Contato, CreateContatoDTO, UpdateContatoDTO } from "../models/contato.model";

export async function findAll(): Promise<Contato[]> {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM contatos");
  return rows as Contato[];
}

export async function findById(id: number): Promise<Contato | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM contatos WHERE id = ?",
    [id]
  );
  return (rows[0] as Contato) || null;
}

export async function create(data: CreateContatoDTO): Promise<Contato> {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO contatos (nome, telefone) VALUES (?, ?)",
    [data.nome, data.telefone]
  );
  const contato = await findById(result.insertId);
  return contato!;
}

export async function update(id: number, data: UpdateContatoDTO): Promise<Contato | null> {
  const fields: string[] = [];
  const values: (string | number)[] = [];

  if (data.nome !== undefined) {
    fields.push("nome = ?");
    values.push(data.nome);
  }

  if (data.telefone !== undefined) {
    fields.push("telefone = ?");
    values.push(data.telefone);
  }

  if (fields.length === 0) {
    return findById(id);
  }

  values.push(id);
  await pool.query<ResultSetHeader>(
    `UPDATE contatos SET ${fields.join(", ")} WHERE id = ?`,
    values
  );

  return findById(id);
}

export async function remove(id: number): Promise<boolean> {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM contatos WHERE id = ?",
    [id]
  );
  return result.affectedRows > 0;
}
