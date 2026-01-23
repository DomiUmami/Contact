import "../styles/Cards.css";


export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
    
      <h2 className="card-title">{project.name}</h2>
      <p className="card-description">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        View Repo
      </a>
      <a
        href={`https://${project.name}.vercel.app`}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        View Live
      </a>
    </div>
  );
}