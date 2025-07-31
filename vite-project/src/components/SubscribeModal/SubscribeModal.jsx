import { useContext } from "react";
import { AppContext } from "../../lib/AppContext";
import { Modal } from "../Modal/Modal";

export function SubscribeModal() {
  const { showSubscribeModal } = useContext(AppContext);
  return <Modal show={showSubscribeModal}>Спасибо за регистрацию!</Modal>;
}
