import React from "react";
import UserRepos from "./UserRepos";
import FollowersFollowing from "./FollowersFollowing";

export default function UserProfile({ user, repos, onSelectUser }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>👤 Perfil do Usuário</h2>

      <img src={user.avatar_url} alt="avatar" width="120" />
      <h3>{user.name || user.login}</h3>
      <p>{user.bio}</p>

      {/* Repositórios */}
      <UserRepos repos={repos} />

      {/* NOVO: Seguidores + Seguindo */}
      <FollowersFollowing 
         username={user.login}
         onSelectUser={onSelectUser}
      />
    </div>
  );
}

