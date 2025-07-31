import { useState } from "react";
import "./App.css";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const success = () => {
    setShowModal(true);
  };
  return (
    <>
      <FirstScreen onSubscribe={success} />
      <Modal show={showModal}>Спасибо за регистрацию!</Modal>
    </>
  );
}

export default App;
