import { useState } from "react";
import "./styles/WhatIDo.css";
import { config } from "../config";

const WhatIDo = () => {
  const [active, setActive] = useState<number | null>(null);
  const cls = (i: number) =>
    "what-content" +
    (active === i ? " what-content-active" : active !== null ? " what-sibling" : "");
  const toggle = (i: number) => setActive((a) => (a === i ? null : i));
  const renderIn = (key: "develop" | "design", i: number) => {
    const s = config.skills[key];
    return (
            {renderIn("develop", 0)}
          </div>
          <div className={cls(1)}>
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            {renderIn("design", 1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

