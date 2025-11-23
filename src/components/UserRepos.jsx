// src/components/UserRepos.jsx
import { useState } from "react";

/*
  Componente UserRepos
  - Recebe a lista de repositórios do App.
  - Exibe uma tabela com:
      • Nome
      • Linguagem
      • Estrelas
      • Forks
  - Permite ordenar a tabela por estrelas ou forks
*/

function UserRepos({ repos }) {
  const [ordenacao, setOrdenacao] = useState("stars");

  // Função que ordena a lista com base na escolha do usuário
  const reposOrdenados = [...repos].sort((a, b) => {
    if (ordenacao === "stars") {
      return b.stargazers_count - a.stargazers_count; // ordem decrescente
    }
    if (ordenacao === "forks") {
      return b.forks_count - a.forks_count;
    }
    return 0;
  });

  if (!repos || repos.length === 0) {
    return <p>Nenhum repositório encontrado.</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Repositórios</h2>

      {/* Seleção de ordenação */}
      <div style={{ marginBottom: "10px" }}>
        <label>Ordenar por: </label>
        <select
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
        >
          <option value="stars">⭐ Estrelas</option>
          <option value="forks">🍴 Forks</option>
        </select>
      </div>

      {/* Tabela dos repositórios */}
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Linguagem</th>
            <th>⭐ Estrelas</th>
            <th>🍴 Forks</th>
          </tr>
        </thead>

        <tbody>
          {reposOrdenados.map((repo) => (
            <tr key={repo.id}>
              <td>
                <a href={repo.html_url} target="_blank">
                  {repo.name}
                </a>
              </td>
              <td>{repo.language || "Não informado"}</td>
              <td>{repo.stargazers_count}</td>
              <td>{repo.forks_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRepos;

