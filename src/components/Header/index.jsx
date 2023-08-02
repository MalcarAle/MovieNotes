import { Input } from "../input"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Container, Profile, Brand, Logout, Search } from "./styles"

export function Header() {
  const { signUp, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signUp()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Brand>
        <h1>Movie Notes</h1>
      </Brand>
      <Search>
        <Input placeholder="Pesquise pelo titulo" type="text" />
      </Search>
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout onClick={handleSignOut}>Sair</Logout>
    </Container>
  )
}
