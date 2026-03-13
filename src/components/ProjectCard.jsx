import "../styles/NewApp.css";


export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
    
      <h2 className="card-title">{project.name}</h2>
      <p className="card-description">{project.description}</p>
      {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="live-link"
      >
        View Live
      </a>
  )}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="repo-link"
      >
        View Repo
      </a>
    </div>
  );
}