import React from "react";
import {css} from '@emotion/core'
import { BounceLoader,BarLoader,BeatLoader } from 'react-spinners'


const loaderCSS = css`
margin-top:"24px";
margin-bottom:"24px"
`

const ReactLoading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BounceLoader loading size={50} color='red' css={loaderCSS}/>
      <BarLoader loading size={50} color='pink' css={loaderCSS}/>
      <BeatLoader loading size={50} color='blue' css={loaderCSS}/>
    </div>
  );
};

export default ReactLoading;
