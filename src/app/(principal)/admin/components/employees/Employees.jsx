// Em forma de lista todos os funcionários, funcionário pode estar ou não ativo;
// Funcionário recebe %: de garçom ou conzinheiro?
// Implementar cálculo de diária caso seja freela ou não;

// Tabela: Funcionário, cargo, ativo, visualizar ao clicar no botão todo, potão de editar ou excluir.
// Total de funcionários
import { useState } from "react";
import { FaPlus, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const initialForm = {
  name: "",
  email: "",
  passwprd: "",
  role: "",
  document: "",
  active: false,
};

const Employees = () => {
  const empolyess = {
    data: [
      { name: "Thiago Santos",
        email: "tssantos@gmail.com",
        password: "teste",
        role: "Waiter", active: true },
      { name: "Edson Gama", role: "Waiter", active: false },

    ],
  };

  const [form, setForm] = useState(initialForm);

  const [onFocusEmployee, setOnFocusEmployee] = useState(null);
  const [isEditing, setIsediting] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  const handleEdit = (e) => {
    setForm(e);
    setIsediting(true);
    setMenuModal(true);
  };

  return (
    <>
      {/* Modal */}

      {menuModal && (
        <div className="fixed inset-0 z-3 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setMenuModal(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            aria-label="Fechar modal"
          ></button>
          <div
            className={`relative bg-[var(--light-bg2)] container rounded-lg shadow-xl w-80 mx-4 p-6`}
          >
            {/* Cabeçalho! */}
            <div className="flex items-center w-full justify-between border-b border-[var(--light-border)] mb-2 ">
              <h2 className="text-lg font-semibold ">
                {" "}
                {isEditing ? "Editar Funcionário" : "Adicionar Funcionário"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setMenuModal(false);
                }}
              >
                <LiaTimesSolid
                  size={26}
                  className="hover:bg-[var(--button-danger)]/40 p-1 rounded-md cursor-pointer"
                  onClick={() => {
                    setMenuModal(false);
                  }}
                />
              </button>
            </div>
            <div className="w-full h-0.5 bg-gray-300 mb-3"></div>
            <div>
              <form className="flex-col" action="">
                <div className="w-full flex justify-between mb-2">
                  <label htmlFor="name">Nome</label>
                  <input
                    className="border-1 border-[var(--purple-bg2)] rounded-xs"
                    type="text"
                    name="name"
                    id="name"
                    value={onFocusEmployee?.name}
                  />
                </div>
                <div className="w-full flex justify-between mb-2">
                  <label htmlFor="email">E-mail</label>
                  <input
                    className="border-1 border-[var(--purple-bg2)] rounded-xs"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="w-full flex justify-between mb-2">
                  <label htmlFor="password">Senha</label>
                  <input
                    className="border-1 border-[var(--purple-bg2)] rounded-xs"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="w-full flex justify-between mb-2">
                  <label htmlFor="document">CPF/CNPJ</label>
                  <input
                    className="border-1 border-[var(--purple-bg2)] rounded-xs"
                    type="document"
                    name="document"
                    id="document"
                  />
                </div>
                <div className="flex w-full justify-evenly mt-6">
                  <button
                    className="text-shadow-xs w-20 text-[var(--light-bg1)] bg-[var(--dark-text2)]/80 p-2 rounded-md cursor-pointer
                    font-medium
                    text-center
                    hover:bg-[var(--dark-text2)]
                    hover:text-[var(--light-bg1)]
                    "
                    onClick={() => setMenuModal(false)}
                    type="button"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="text-shadow-xs w-20 text-[var(--light-bg1)] bg-[var(--purple-bg3)]/80 p-2 rounded-md cursor-pointer
                    text-center
                    font-medium
                    hover:bg-[var(--purple-bg3)]
                    hover:text-[var(--light-bg1)]
                    "
                  >
                    Criar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-[var((--light-text1)]">Funcionários</h2>
        <button
          className="text-shadow-xs text-[var(--light-bg1)] bg-[var(--purple-bg3)]/80 p-2 rounded-md cursor-pointer
                    font-medium
                    flex items-center gap-2
                    hover:bg-[var(--purple-bg3)]
                    hover:text-[var(--light-bg1)]
                    "
          type="button"
          onClick={() => setMenuModal(true)}
        >
          <FaPlus /> Adicionar
        </button>
      </div>
      <div className="">
        {empolyess?.data?.map((e) => (
          <button
            className={`flex justify-between w-full bg-[var(--light-bg1)] shadow-md mb-4 p-3 rounded-md 
              border-l-[var(--purple-bg2)] border-l-2 hover:border-l-4`}
            type="button"
            key={e.name}
          >
            <div className={`flex-col text-left`}>
              <h2 className="font-bold flex gap-3 items-center">{e.name}</h2>
              <p>{e.role}</p>
            </div>
            <div className=" flex-col text-right">
              <span
                className={`font-normal text-xs px-2 rounded-md border-1 ${
                  e.active ? "bg-green-200" : "bg-gray-200"
                }`}
              >
                {" "}
                {e.active ? "Ativo" : "Inativo"}
              </span>
              <div className="flex gap-2">
                <button
                  className="bg-gray-200 rounded-md shadow-xs cursor-pointer
                    hover:bg-[var(--purple-bg3)] hover:text-[var(--dark-text1)]
                    p-2 px-3 mt-3
              "
                  type="button"
                  onClick={() => handleEdit(e)}
                >
                  <FaUserEdit />
                </button>
                <button
                  className="bg-gray-200 rounded-md shadow-xs cursor-pointer
                    hover:bg-[var(--purple-bg3)] hover:text-[var(--dark-text1)]
                    p-2 px-3 mt-3"
                  type="button"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Employees;
