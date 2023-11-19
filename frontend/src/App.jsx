import { toast, ToastContainer } from 'react-toastify'
import { Wrapper } from './components/Wrapper'
import { Form } from './components/Form'
import { Grid } from './components/Grid'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  useEffect(() => {}, [setUsers])

  async function getUsers() {}
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
          <Grid />
        </div>
      </Wrapper>
    </>
  )
}

export default App
