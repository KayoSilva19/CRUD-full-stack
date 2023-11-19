import { toast, ToastContainer } from 'react-toastify'
import { Wrapper } from './components/Wrapper'
import { Form } from './components/Form'
import { Grid } from './components/Grid'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  useEffect(() => {
    getUsers()
  }, [setUsers])

  async function getUsers() {
    try {
      const res = await axios.get('http://localhost:8080')
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <>
      <ToastContainer
        autoClose={5000}
        position={toast.POSITION.BOTTOM_CENTER}
      />
      <Wrapper>
        <h1 className="mt-16 font-bold text-[2rem] text-zinc-900">Usuários</h1>
        <div className="max-w-7xl">
          <Form />
          <Grid users={users} />
        </div>
      </Wrapper>
    </>
  )
}

export default App
