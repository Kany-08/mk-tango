import { createContext } from "react";

export const AppContext = createContext({
  showSubscribeModal: false,
  setShowSubscribeModal: () => {},
});
