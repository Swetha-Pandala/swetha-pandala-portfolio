import { useCallback, useState } from "react";
import { handleResumeClick } from "./utils/resumeDownload";
import { config } from "../config";
import HireMeModal from "./HireMeModal";
import "./styles/CallToAction.css";

const CallToAction = () => {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={config.resumeFile}
          download="Swetha_Pandala_Resume.pdf"
        type="application/pdf"
        onClick={handleResumeClick}
          className="cta-btn cta-btn-play"
          data-cursor="disable"
        >
          Download Resume →
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
          aria-haspopup="dialog"
        >
          Hire Me →
        </button>
      </div>
      <HireMeModal open={open} onClose={close} />
    </div>
  );
};

export default CallToAction;
