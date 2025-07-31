import { useState } from "react";
import "./App.css";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { Modal } from "./components/Modal/Modal";
import { AppContext } from "./lib/AppContext";
import { SubscribeModal } from "./components/SubscribeModal/SubscribeModal";

function App() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const value = {
    showSubscribeModal,
    setShowSubscribeModal,
  };

  const success = () => {
    setShowSubscribeModal(true);
  };
  return (
    <AppContext.Provider value={value}>
      <FirstScreen onSubscribe={success} />
      <SubscribeModal />
    </AppContext.Provider>
  );
}

export default App;
