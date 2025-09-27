import { LiaTimesSolid } from "react-icons/lia";

export default function MenuModalPedido({ menuModal, setMenuModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        onClick={() => setMenuModal(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-label="Fechar modal"
      ></button>
      <div
        className={`relative bg-[var(--light-bg2)] rounded-lg shadow-xl w-full mx-4 max-w-max`}
      >
        {/* Cabeçalho! */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--light-border)]">
          <h2 className="text-lg font-semibold ">Adicionar pedido</h2>
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

        <div className="p-6">
          <div className="">
            <div className="text-center">
              {/* Menu de pedidos */}
              <div className="flex justify-between px-1 pb-2 mb-2">
                <p className="shadow-md bg-[var(--light-bg1)] rounded-md px-4 py-1 border border-[var(--purple-bg2)]">
                  Peixes
                </p>
                <p className="text-[var(--dark-text2)]">|</p>
                <p className="shadow-md  rounded-md px-4 py-1">Carnes</p>
                <p className="text-[var(--dark-text2)]">|</p>
                <p className="shadow-md  rounded-md px-4 py-1">Petiscos </p>
                <p className="text-[var(--dark-text2)]">|</p>
                <p className="shadow-md  rounded-md px-4 py-1">Bebidas </p>
              </div>

              {/* Pedidos */}
              <div className="flex-col w-120 justify-center">
                <button
                  type="button"
                  className="shadow-md bg-[var(--light-bg1)] rounded-md p-4 w-full flex items-center justify-between mb-2 border border-[var(--purple-bg2)]"
                >
                  <p className="text-md font-medium text-left">
                    Filé de Peixe ao molho de camarote
                  </p>
                  <p className="text-[var(--light-text2)] w-30 text-right">
                    R$ 125,00
                  </p>
                </button>
                <button
                  type="button"
                  className="shadow-md bg-[var(--light-bg1)] rounded-md p-4 w-full flex items-center justify-between mb-2"
                >
                  <p className="text-md font-medium text-left">
                    Peixe frito a moda da casa
                  </p>
                  <p className="text-[var(--light-text2)] w-30 text-right">
                    R$ 130,00
                  </p>
                </button>
                <button
                  type="button"
                  className="shadow-md bg-[var(--light-bg1)] rounded-md p-4 w-full flex items-center justify-between mb-2"
                >
                  <p className="text-md font-medium text-left">
                    fala comi-i-igo
                  </p>
                  <p className="text-[var(--light-text2)] w-30 text-right">
                    R$ 999,00
                  </p>
                </button>
              </div>
              <div className="flex-col text-left w-120">
                <p className="font-medium text-lg">Itens</p>
                <div className="flex justify-between px-4">
                  <p>1x Filé de peixe ao molho de camarote</p>
                  <p>R$ 125,00</p>
                </div>
                <div className="flex justify-between px-4">
                  <p>1x Pinita coladiiita</p>
                  <p>R$ 28,00</p>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <p>Total do pedido</p>
                <div className="font-medium">R$ 153,00</div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 justify-between">
              <button
                type="button"
                className="bg-[var(--button-danger)]/80 text-[var(--dark-text1)] font-medium w-full rounded-md p-2 cursor-pointer  hover:bg-[var(--button-danger-hover)]"
                onClick={() => {
                  setMenuModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="bg-[var(--button-success)] text-[var(--dark-text1)] font-medium w-full rounded-md cursor-pointer  hover:bg-[var(--button-success-hover)]"
              >
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
