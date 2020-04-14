import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>yellow colored Tooltip</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>first child</div>
      <div>second child</div>
    </div>
  );
});

const ReactTooltip = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Basic Tooltip">
          <button>hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          content={<span style={{ color: "orange" }}>colored Tooltip</span>}
        >
          <button>hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />} arrow={false} delay={1000}>
          <button>hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />} placement='top'>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
};

export default ReactTooltip;
