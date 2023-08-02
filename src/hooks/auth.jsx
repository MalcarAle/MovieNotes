/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      //salvando os dados no Local Storage do navegador para que nao perca o login
      //usando o JSON.stringify para transformar o objeto em JS para JSON
      localStorage.setItem("@movienotes:user", JSON.stringify(user))
      localStorage.setItem("@movienotes:token", token)

      //passando o token no cabeçalho da pagina, por isso nao passamos no provider
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel acessar!")
      }
    }
  }

  async function signUp() {
    const token = localStorage.removeItem("@movienotes:token")
    const user = localStorage.removeItem("@movienotes:user")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUpdateForm = new FormData()
        fileUpdateForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUpdateForm)
        user.avatar = response.data.avatar
      }

      //fazendo um "update" na user
      await api.put("/users", user)

      //sobrepoe o json do user no localstorage
      localStorage.setItem("@movienotes:user", JSON.stringify(user))
      setData({ user, token: data.token })
      alert("Perfil Atualizado!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel atualizar seus dados")
      }
    }
  }

  //fazendo verificação no localstorage se existe usuario e token validado para nao deslogar
  useEffect(() => {
    const token = localStorage.getItem("@movienotes:token")
    const user = localStorage.getItem("@movienotes:user")

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])
  return (
    //todas as rotas da aplicação passam por aqui, pois estamos recebendo ela pela props CHILDREN
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
