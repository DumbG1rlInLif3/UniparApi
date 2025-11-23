// Este componente cuida de receber o nome do usuário digitado
// e enviar para o App.jsx quando o formulário é enviado.

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") return;

    // Chama a função do App que realiza a busca
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Digite o usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;

