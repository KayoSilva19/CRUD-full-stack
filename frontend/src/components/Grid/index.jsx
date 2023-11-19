import { Trash, PencilSimpleLine } from '@phosphor-icons/react'
import axios from 'axios'

import { toast } from 'react-toastify'

const theadStyles = 'border-b border-bottom border-b-zinc-300'
const tdStyles = 'text-left pt-2 pb-2 mb-2'

export function Grid({ users, setUsers, setOnEdit }) {

  async function handleDelete(id) {
    await axios
    .delete(`http://localhost:8080/${id}`)
    .then(({ data }) => {
      const newArrayUsers = users.filter((user) => user.idusuarios !== id); 
    

        setUsers(newArrayUsers)
        toast.success(data)
      })
      .catch(({data}) => toast.error(data))

      setOnEdit(null)
  }

   function handleEdit(item) {
      setOnEdit(item)
  }

  return (
    <table className="mt-16 bg-white drop-shadow-md w-full rounded">
      <thead className={theadStyles}>
        <tr className="text-zinc-900">
          <th className="pl-4 text-left p-2">Nome</th>
          <th className="text-left ">Email</th>
          <th className="text-left max-[768px]:hidden ">Fone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => {
          return (
            <tr key={i} className="border-b border-bottom border-b-zinc-300 ">
              <td className={`${tdStyles} pl-4 w-[25%]`}>{item.nome.length > 48 ? item.nome.slice(0, 10) + '...' : item.nome}</td>
              <td className={`${tdStyles} w-[25%]`}>{item.email.length > 48 ? item.email.slice(0, 15) + '...'  : item.email}</td>
              <td className={`${tdStyles} max-[768px]:hidden  w-[20%]`}>
                {item.fone}
              </td>
              <td
                className={`text-center pt-2 pb-2 max-[768px]:w-[15%] w-[10%]`}
              >
                <button
                  onClick={() => handleEdit(item)}
                  className={`bg-blue-500 p-2 rounded text-white hover:bg-blue-700  hover:scale-105 transition-all`}
                >
                  <PencilSimpleLine size={18} />
                </button>
              </td>
              <td
                className={`text-center pt-2 pb-2 max-[768px]:w-[15%] w-[10%]`}
              >
                <button
                  onClick={() => handleDelete(item.idusuarios)}
                  className={`bg-red-500 p-2 rounded text-white hover:bg-red-700  hover:scale-105 transition-all`}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
