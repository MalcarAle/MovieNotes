import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import { Container, Form, Avatar } from "./styles"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  //pegando a url do backend e montando ela no front
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }

  //Função para salvar as atualizações, este vai para o onClick do botao salvar
  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })

    navigate(-1)
  }

  function handleChangeAvatar(event) {
    //pegando um unico arquivo que o usuario subir, por isso posição 0
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Senha Nova"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
