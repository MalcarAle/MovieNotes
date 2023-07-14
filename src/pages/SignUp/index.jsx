import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Form, Background } from "./styles.js"
import { Input } from "../../components/Input/index.jsx"
import { Button } from "../../components/Button/index.jsx"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Movie Notes</h1>
        <p>Aplicação para acompanhar tudo que assistir!</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#">Voltar para o login</a> 
      </Form>

      <Background />
    </Container>
  )
}
