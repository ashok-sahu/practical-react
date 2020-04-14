import React from "react";
import {
  ReactVideoPlayer,
  ReactPresentation,
  ReactIcons,
  ReactToast,
  ReactModal,
  ReactTooltip,
  ReactCountUp,
  IdleTimer,
  ColorPicker,
  ReactCreditCard,
  ReactLoading,
  ReactCalander,
  ReactChart
} from "../src/all_comp";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";

function App() {
  return (
    <div>
      <ReactIcons />
      <ReactToast />
      <ReactModal />
      <ReactTooltip />
      <ReactCountUp />
      <IdleTimer />
      <ColorPicker />
      <ReactCreditCard />
      <ReactPresentation />
      <ReactVideoPlayer />
      <ReactLoading />
      <ReactCalander />
      <ReactChart/>
    </div>
  );
}

export default App;
