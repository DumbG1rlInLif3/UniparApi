import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import UserRepos from "./components/UserRepos";
import FollowersFollowing from "./components/FollowersFollowing.jsx";


function App() {
  const [user, setUser] = useState(null); // Dados do usuário
  const [repos, setRepos] = useState([]); // Repositórios
  const [error, setError] = useState(null); // Mensagem de erro

  // Função que busca dados de um usuário
  const fetchUserData = async (username) => {
    try {
      setError(null); // Limpa erro
      setUser(null);
      setRepos([]);

      // Buscar perfil
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (userResponse.status === 404) {
        setError("Usuário não encontrado!");
        return;
      }
      const userData = await userResponse.json();
      setUser(userData);

      // Buscar repositórios
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
      setRepos(reposData);

    } catch (err) {
      console.error(err);
      setError("Erro ao buscar informações.");
    }
  };

  // FUNÇÃO NOVA: chamada quando clica em um card de seguidor ou seguindo
  const handleSelectUser = (username) => {
    fetchUserData(username);
  };


  return (
    <div className="app-container">
      <h1>GitHub API Explorer</h1>

      {/* Barra de busca */}
      <SearchBar onSearch={fetchUserData} />

      {/* Exibe erro */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Exibe perfil e repositórios apenas se houver usuário */}
      {user && (
        <UserProfile
          user={user}
          repos={repos}
          onSelectUser={handleSelectUser}
        />
      )}
    </div>
  );
}


export default App;

