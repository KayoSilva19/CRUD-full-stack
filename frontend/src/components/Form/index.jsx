import { useEffect, useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const styleInputContainer =
  'flex flex-col gap-1 text-zinc-900 font-medium max-[768px]:w-[100%]'
const styleInput = 'border border-zinc-300 rounded h-[2.375rem] px-4 '

export function Form({ getUsers, onEdit, setOnEdit }) {
  const ref = useRef()

  useEffect(() => {
    if(onEdit) {
      const user = ref.current

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;

    }
  }, [onEdit])

  async function handleSubmit(e) {
    e.preventDefault()

    const user = ref.current

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put(`http://localhost:8080/${onEdit.idusuarios}`, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8080", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUsers();
  }


  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
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
