import { useState } from "react"

import { supabase } from "../api/supabase"

import "./AdminLogin.css"

function AdminLogin({ onLogin }) {

  const [email,setEmail] = useState("")

  const [password,setPassword] = useState("")

  const [error,setError] = useState("")

  async function login(){

    const { error } = await supabase.auth.signInWithPassword({

      email,

      password

    })

    if(error){

        console.log("Ошибка входа:", error)

        setError(error.message)

        return

    }

    onLogin()

  }

  return (

    <div className="admin-login">

      <div className="login-box">

        <h1>
          Админ-панель
        </h1>

        <input

          placeholder="Email"

          value={email}

          onChange={
            e=>setEmail(e.target.value)
          }

        />

        <input

          type="password"

          placeholder="Пароль"

          value={password}

          onChange={
            e=>setPassword(e.target.value)
          }

        />

        {
          error &&
          <p>
            {error}
          </p>
        }

        <button onClick={login}>

          Войти

        </button>

      </div>

    </div>

  )

}

export default AdminLogin