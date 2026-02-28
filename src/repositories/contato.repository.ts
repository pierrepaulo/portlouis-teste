import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../config/database";
import { Contato, CreateContatoDTO } from "../models/contato.model";

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
