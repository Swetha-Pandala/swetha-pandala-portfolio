import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const icon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

// Inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Languages & core frameworks
  [
    { name: "Python", icon: icon("python"), url: "https://python.org" },
    { name: "Java", icon: icon("java"), url: "https://www.java.com" },
    { name: "TypeScript", icon: icon("typescript"), url: "https://typescriptlang.org" },
    { name: "JavaScript", icon: icon("javascript"), url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: icon("react"), url: "https://react.dev" },
    { name: "Angular", icon: icon("angular"), url: "https://angular.dev" },
    { name: "Redux", icon: icon("redux"), url: "https://redux.js.org" },
    { name: "Material UI", icon: icon("materialui"), url: "https://mui.com" },
    { name: "HTML5", icon: icon("html5"), url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: icon("css3"), url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Spring", icon: icon("spring"), url: "https://spring.io" },
    { name: "R", icon: icon("r"), url: "https://www.r-project.org" },
  ],
  // Backend & data stores
  [
    { name: "Spring Boot", icon: icon("springboot"), url: "https://spring.io/projects/spring-boot" },
    { name: "FastAPI", icon: icon("fastapi"), url: "https://fastapi.tiangolo.com" },
    { name: "Flask", icon: icon("flask"), url: "https://flask.palletsprojects.com" },
    { name: "Node.js", icon: icon("nodejs"), url: "https://nodejs.org" },
    { name: "GraphQL", icon: icon("graphql"), url: "https://graphql.org" },
    { name: "PostgreSQL", icon: icon("postgresql"), url: "https://postgresql.org" },
    { name: "MySQL", icon: icon("mysql"), url: "https://mysql.com" },
    { name: "MongoDB", icon: icon("mongodb"), url: "https://mongodb.com" },
    { name: "Redis", icon: icon("redis"), url: "https://redis.io" },
    { name: "Cassandra", icon: icon("cassandra"), url: "https://cassandra.apache.org" },
  ],
  // AI & ML
  [
    { name: "PyTorch", icon: icon("pytorch"), url: "https://pytorch.org" },
    { name: "TensorFlow", icon: icon("tensorflow"), url: "https://tensorflow.org" },
    { name: "Scikit-learn", icon: icon("scikitlearn"), url: "https://scikit-learn.org" },
    { name: "Pandas", icon: icon("pandas"), url: "https://pandas.pydata.org" },
    { name: "NumPy", icon: icon("numpy"), url: "https://numpy.org" },
    { name: "PySpark", icon: icon("apachespark"), url: "https://spark.apache.org" },
    { name: "Jupyter", icon: icon("jupyter"), url: "https://jupyter.org" },
    {
      name: "Hugging Face",
      icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      url: "https://huggingface.co",
    },
  ],
  // Cloud & DevOps
  [
    { name: "AWS", icon: icon("amazonwebservices", "original-wordmark"), url: "https://aws.amazon.com" },
    { name: "Azure", icon: icon("azure"), url: "https://azure.microsoft.com" },
    { name: "Docker", icon: icon("docker"), url: "https://docker.com" },
    { name: "Kubernetes", icon: icon("kubernetes"), url: "https://kubernetes.io" },
    { name: "Terraform", icon: icon("terraform"), url: "https://terraform.io" },
    { name: "Ansible", icon: icon("ansible"), url: "https://ansible.com" },
  ],
  // Delivery & observability
  [
    { name: "Jenkins", icon: icon("jenkins"), url: "https://jenkins.io" },
    { name: "GitHub Actions", icon: icon("githubactions"), url: "https://github.com/features/actions" },
    { name: "Kafka", icon: icon("apachekafka"), url: "https://kafka.apache.org" },
    { name: "Elasticsearch", icon: icon("elasticsearch"), url: "https://www.elastic.co/elasticsearch" },
  ],
  // Tip
  [
    { name: "Prometheus", icon: icon("prometheus"), url: "https://prometheus.io" },
    { name: "Grafana", icon: icon("grafana"), url: "https://grafana.com" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      <div className="techstack-video-container">
        <div className="techstack-aurora" aria-hidden="true"></div>
        <div className="techstack-overlay"></div>
      </div>

      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="techstack-row">
              {row.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
