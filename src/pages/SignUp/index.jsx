/* eslint-disable no-empty-pattern */
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../services/api"

import { Container, Form, Background } from "./styles.js"
import { Input } from "../../components/Input/index.jsx"
import { Button } from "../../components/Button/index.jsx"

export function SignUp() {
  const [name, setName] = useState("") //iniciando o estado com um text vazio
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    //acessando a rota /users e enviando os dados do usuario para cadastro
    //ao enviar os dados, verificamos se tudo deu certo, utilizando o .then e o .catch
    //o then retorna o alert de que deu certo e o catch pega o erro e em uma arrow function verificamos qual o erro.

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel cadastrar o usuario! ")
        }
      })
  }
  return (
    <Container>
      <Form>
        <h1>Movie Notes</h1>
        <p>Aplicação para acompanhar tudo que assistir!</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>

      <Background />
    </Container>
  )
}
