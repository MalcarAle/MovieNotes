import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"

import { Container, Form } from "./styles"
import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Textarea } from "../../components/textarea"
import { ButtonText } from "../../components/ButtonText"
import { MovieItem } from "../../components/MovieItem"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [rating, setRating] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Insira um titulo na nota!")
    }

    if (rating < 0 || rating > 5) {
      return alert("Nota inválida!")
    }

    if (newTag) {
      return alert(
        "Voce deixou uma tag no campo para adicionar, mas nao clicou em adicionar!"
      )
    }

    await api.post("/movieNotes", {
      title,
      description,
      tags,
      rating,
    })

    alert("Nota criada com sucesso! 🎬🎬")
    navigate(-1)
  }

  function handleClearForm() {
    setTitle("")
    setRating("")
    setDescription("")
    setTags([])
    setNewTag("")
  }

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
            <Input
              type="text"
              placeholder="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <MovieItem
                isNew
                placeholder="Novo Marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div>
            <Button title="Descartar alterações" onClick={handleClearForm} />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
