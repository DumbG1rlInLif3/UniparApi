import React, { useState, useEffect } from "react";

/*
  Componente FollowersFollowing
  - Exibe seguidores e seguindo em cards
  - Permite clicar no card para buscar o perfil do usuário clicado
  - Utiliza classes CSS definidas no App.css para centralização e estilo
*/

function FollowersFollowing({ username, onSelectUser }) {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  // Buscar seguidores
  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}/followers`)
      .then(res => res.json())
      .then(data => setFollowers(data))
      .catch(err => console.log("Erro ao buscar followers:", err));
  }, [username]);

  // Buscar seguindo
  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}/following`)
      .then(res => res.json())
      .then(data => setFollowing(data))
      .catch(err => console.log("Erro ao buscar following:", err));
  }, [username]);

  return (
  <div className="followers-wrapper">
    <h2 className="group-title">👥 Seguidores e Seguindo</h2>

    {/* Seguidores */}
    {followers.length > 0 && (
      <>
        <h3 className="group-title">📌 Seguidores</h3>
        <div className="followers-container">
          {followers.map(user => (
            <div
              key={user.id}
              className="followers-card"
              onClick={() => onSelectUser(user.login)}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width="80"
                style={{ borderRadius: "50%" }}
              />
              <p>{user.login}</p>
            </div>
          ))}
        </div>
      </>
    )}

    {/* Seguindo */}
    {following.length > 0 && (
      <>
        <h3 className="group-title">📌 Seguindo</h3>
        <div className="followers-container">
          {following.map(user => (
            <div
              key={user.id}
              className="followers-card"
              onClick={() => onSelectUser(user.login)}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width="80"
                style={{ borderRadius: "50%" }}
              />
              <p>{user.login}</p>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);
}

// Export no final do arquivo (padrão da aula)
export default FollowersFollowing;


