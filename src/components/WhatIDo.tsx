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
      <div className="what-content-in">
        <h3>{s.title}</h3>
        <h4>{s.description}</h4>
        <p>{s.details}</p>
        <div className="what-extra" aria-hidden={active !== i}>
          <p>{s.more}</p>
          <h5>Skillset & tools</h5>
          <div className="what-content-flex">
            {s.tools.map((tool) => (
              <div key={tool} className="what-tags">
                {tool}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="what-arrow"
          aria-expanded={active === i}
          aria-label={`${active === i ? "Collapse" : "Expand"} ${s.title}`}
          onClick={() => toggle(i)}
          data-cursor="disable"
        ></button>
      </div>
    );
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            &nbsp;I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          <div className={cls(0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            {renderIn("develop", 0)}
          </div>
          <div className={cls(1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
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
