import { useRef } from 'react'

const styleInputContainer =
  'flex flex-col gap-1 text-zinc-900 font-medium max-[768px]:w-[100%]'
const styleInput = 'border border-zinc-300 rounded h-[2.375rem] px-4 '

export function Form({ onEdit }) {
  const ref = useRef()
  return (
    <form
      ref={ref}
      className="mt-8 flex bg-white min-h-[10rem] rounded-md drop-shadow-sm p-4 flex-wrap  items-center items w-full gap-6"
    >
      <div className={styleInputContainer}>
        <label>Nome</label>
        <input name="nome" className={styleInput} />
      </div>
      <div className={styleInputContainer}>
        <label>E-mail</label>
        <input name="email" type="email" className={styleInput} />
      </div>
      <div className={styleInputContainer}>
        <label>Telefone</label>
        <input name="fone" className={styleInput} />
      </div>
      <div className={styleInputContainer}>
        <label>Data de Nascimento</label>
        <input name="data_nascimento" type="date" className={styleInput} />
      </div>

      <button
        type="submit"
        className="bg-blue-500 font-bold rounded py-2 px-8 max-h-32  text-zinc-50 hover:bg-blue-700 hover:scale-110 duration-300 trasnsition-all"
      >
        SALVAR
      </button>
    </form>
  )
}
