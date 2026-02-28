- Pre-requisitos (Node.js, Docker) - Como instalar (npm install)
- Como subir o banco (docker compose up -d)
- Como rodar em dev (npm run dev)
- Como rodar testes (npm test)
- Como buildar (npm run build)
- Tabela de endpoints (metodo, path, body, resposta)

Teste 1: POST /contatos (nome valido)

- Metodo: POST
- URL: http://localhost:3000/contatos
- Body (JSON):
  { "nome": "João Silva", "telefone": "(11) 99999-9999" }
- Esperado: Status 201 + contato criado com id e created_at

---

Teste 2: POST /contatos (nome com 1 palavra)

- Metodo: POST
- URL: http://localhost:3000/contatos
- Body (JSON):
  { "nome": "João", "telefone": "(11) 99999-9999" }
- Esperado: Status 400 + { error: "Nome deve ter pelo menos 2 palavras,
  cada uma com no mínimo 3 caracteres" }

---

Teste 3: POST /contatos (palavras curtas)

- Metodo: POST
- URL: http://localhost:3000/contatos
- Body (JSON):
  { "nome": "Jo Si", "telefone": "(11) 99999-9999" }
- Esperado: Status 400 + mesma mensagem de erro

---

Teste 4: POST /contatos (sem nome)

- Metodo: POST
- URL: http://localhost:3000/contatos
- Body (JSON):
  { "telefone": "(11) 99999-9999" }
- Esperado: Status 400 + { error: "Nome é obrigatório" }

---

Teste 5: POST /contatos (sem telefone)

- Metodo: POST
- URL: http://localhost:3000/contatos
- Body (JSON):
  { "nome": "João Silva" }
- Esperado: Status 400 + { error: "Telefone é obrigatório" }

---

Teste 6: GET /contatos

- Metodo: GET
- URL: http://localhost:3000/contatos
- Body: nenhum
- Esperado: Status 200 + array com o contato criado no Teste 1

---

Teste 7: PATCH /contatos/1 (atualizar telefone)

- Metodo: PATCH
- URL: http://localhost:3000/contatos/1
- Body (JSON):
  { "telefone": "(11) 88888-8888" }
- Esperado: Status 200 + contato com telefone atualizado

---

Teste 8: PATCH /contatos/1 (atualizar nome valido)

- Metodo: PATCH
- URL: http://localhost:3000/contatos/1
- Body (JSON):
  { "nome": "Maria Souza" }
- Esperado: Status 200 + contato com nome atualizado

---

Teste 9: PATCH /contatos/1 (nome invalido)

- Metodo: PATCH
- URL: http://localhost:3000/contatos/1
- Body (JSON):
  { "nome": "Jo" }
- Esperado: Status 400 + mensagem de erro do nome

---

Teste 10: PATCH /contatos/999 (id inexistente)

- Metodo: PATCH
- URL: http://localhost:3000/contatos/999
- Body (JSON):
  { "telefone": "(11) 88888-8888" }
- Esperado: Status 404 + { error: "Contato não encontrado" }

---

Teste 11: DELETE /contatos/1

- Metodo: DELETE
- URL: http://localhost:3000/contatos/1
- Body: nenhum
- Esperado: Status 204 sem body

---

Teste 12: DELETE /contatos/999 (id inexistente)

- Metodo: DELETE
- URL: http://localhost:3000/contatos/999
- Body: nenhum
- Esperado: Status 404 + { error: "Contato não encontrado" }

---

Teste 13: GET /contatos (confirmar exclusao)

- Metodo: GET
- URL: http://localhost:3000/contatos
- Body: nenhum
- Esperado: Status 200 + array vazio (contato foi deletado no Teste 11)
