import { useState } from "react";
import Modal from './components/Modal'
import './Transferencia.css'

function Transferencia(): JSX.Element {

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className="App">
      <h1>Como Deseja Transferir</h1>
      <button
        style={{ marginRight: '2rem' }}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Pagamento PIX
      </button>

      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        input1="name1"
        input2="name2"
        input3="name3"
        title="Pix"
      />

      <button
        style={{ marginLeft: '2rem' }}
        onClick={() => {
          setOpenModal2(true);
        }}
      >
        Pagamento Bancario
      </button>
      <Modal
        isOpen={openModal2}
        setModalOpen={() => setOpenModal2(!openModal2)}
        input1="name1"
        input2="name2"
        input3="name3"
        input4="name4"
        input5="name5"
        input6="name6"
        title="TED"
      />
    </div>
  );

}

export default Transferencia;