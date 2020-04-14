import React from "react";
import ReactPlayer from "react-player";

const ReactVideoPlayer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ReactPlayer
        controls
        height='240px'
        width='480px'
        onReady={()=>console.log('ready')}
        onStart={()=>console.log('start')}
        onPause={()=>console.log('pause')}
        onError={()=>console.log('error')}
        url="https://youtu.be/7sDY4m8KNLc?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM"
      />
    </div>
  );
};

export default ReactVideoPlayer;
