import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  return (
    <Container>
      <header>
        <FiArrowLeft />
        <a href="#">
          <p>Voltar</p>
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/malcarale.png" alt="Foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Senha Nova" type="password" icon={FiLock} />
        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
