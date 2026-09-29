import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { config } from "../config";
import "./styles/Resources.css";

gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".resources-section h2",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".resources-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".resource-group").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll(".resource-card, .resource-group-title"),
          { opacity: 0, y: 40, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="resources-section section-container" id="resources">
      <h2>
        Useful <span>Resources</span>
      </h2>
      <p className="resources-intro">
        Profiles, learning platforms and research hubs I keep close while building AI systems.
      </p>

      <div className="resources-groups">
        {config.resources.map((group) => (
          <div className="resource-group" key={group.category}>
            <h3 className="resource-group-title">{group.category}</h3>
            <div className="resource-grid">
              {group.items.map((item) => (
                <a
                  className="resource-card"
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <span className="resource-type">{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.note}</p>
                  <span className="resource-arrow" aria-hidden="true">
                    <MdArrowOutward />
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
