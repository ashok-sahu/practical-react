import React from "react";
import { toast } from "react-toastify";

const CustomToast = ({closeToast}) => {
    return(
        <div>
            something wents wrong!
            <button onClick={closeToast}>cancel</button>
        </div>
    )
}

toast.configure();
const ReactToast = () => {    
    const notify = () => {
    toast("simple toast..", { 
        position: toast.POSITION.TOP_CENTER, 
        autoClose:5000
    });
    toast.info("info toast..", { 
        position: toast.POSITION.TOP_RIGHT,
        autoClose:false 
    });
    toast.success("success toast..", { position: toast.POSITION.BOTTOM_RIGHT });
    toast.warn(<CustomToast />, { position: toast.POSITION.TOP_LEFT });
    toast.error("error toast..", { position: toast.POSITION.BOTTOM_LEFT });
  };

  return (
    <div>
      <button onClick={notify}>notify!</button>
    </div>
  );
};

export default ReactToast;
