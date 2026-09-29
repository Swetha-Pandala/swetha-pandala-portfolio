import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "../config";
import "./styles/Credentials.css";

gsap.registerPlugin(ScrollTrigger);

const Credentials = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".credentials-section .credentials-col",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".credentials-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="credentials-section section-container" id="credentials">
      <div className="credentials-col">
        <h3>Education</h3>
        <ul>
          {config.education.map((item) => (
            <li key={item.degree}>
              <span className="credential-period">{item.period}</span>
              <h4>{item.degree}</h4>
              <p>
                {item.school} <span>· {item.meta}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="credentials-col">
        <h3>Certifications</h3>
        <ul>
          {config.certifications.map((item) => (
            <li key={item.name}>
              <span className="credential-period">{item.year}</span>
              <h4>{item.name}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Credentials;
