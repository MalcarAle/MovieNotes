import { FiArrowLeft } from "react-icons/fi"

import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Textarea } from "../../components/textarea"
import { ButtonText } from "../../components/ButtonText"
import { MovieItem } from "../../components/MovieItem"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
            <ButtonText>
              <FiArrowLeft />
              Voltar
            </ButtonText>
          <header>

            <h1>Novo Filme</h1>
          </header>

          <div>
            <Input placeholder="Titulo" />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
            />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <MovieItem value="AÇÃO" />
              <MovieItem isNew placeholder="Novo Marcador" />
            </div>
          </Section>

          <div>
            <Button title="Descartar alterações" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
