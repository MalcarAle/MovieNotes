import { Input } from "../input"
import { Container, Profile, Brand, Logout, Search } from "./styles"

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>Movie Notes</h1>
      </Brand>
      <Search>
        <Input placeholder="Pesquise pelo titulo" type="text" />
      </Search>
      <Profile>
        <div>
          <strong>Alexandre Malcar</strong>
        </div>
        <img src="https://github.com/malcarale.png" alt="Profile Picture" />
      </Profile>

      <Logout>Sair</Logout>
    </Container>
  )
}
