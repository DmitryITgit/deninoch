import { useEffect, useState } from "react"

import "./Admin.css"

import ApartmentList from "../components/admin/ApartmentList"

import AdminLogin from "./AdminLogin"

import { supabase } from "../api/supabase"

function Admin() {

  const [session, setSession] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function checkAuth() {

      const { data } = await supabase.auth.getSession()

      setSession(data.session)

      setLoading(false)

    }

    checkAuth()

    const {

      data: listener

    } = supabase.auth.onAuthStateChange(

      (_event, session) => {

        setSession(session)

      }

    )

    return () => {

      listener.subscription.unsubscribe()

    }

  }, [])

  if (loading) {

    return (

      <div className="admin">

        Загрузка...

      </div>

    )

  }

  if (!session) {

    return (

      <AdminLogin

        onLogin={() => {

          window.location.reload()

        }}

      />

    )

  }

  async function logout() {
    await supabase.auth.signOut()
  }

  return (

    <main className="admin">

      <section className="admin-content">

        <div className="admin-toolbar">
          <span>
            {session.user?.email}
          </span>
          <button type="button" onClick={logout}>
            Выйти
          </button>
        </div>

        <ApartmentList />

      </section>

    </main>

  )

}

export default Admin