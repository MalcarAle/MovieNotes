import { FiPlus } from "react-icons/fi"
import { Container, Content, NewMovie } from "./styles"

import { Header } from "../../components/Header"

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Meus Filmes</h1>

          <NewMovie>
            <FiPlus />
            Novo Filme
          </NewMovie>
        </header>

        <Content>
          
        </Content>
      </main>
    </Container>
  )
}
