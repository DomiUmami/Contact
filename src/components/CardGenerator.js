import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Cards.css";

export default function ProjectCardGenerator({ username }) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();
        setRepos(
          data.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  )
);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading repositories...</p>;
  if (!repos.length) return <p>No repositories found.</p>;



    /* const projects = [
    {
      name: "Electron Template",
      description: "A cool project I made in React.",
      url: "https://github.com/DomiUmami/ElectronTemplate.git",
    },
    {
      name: "reactics",
      description: "A fun JavaScript experiment.",
      url: "https://github.com/DomiUmami/reactics.git",
    },
    {
      name: "Final BloomTech Project",
      description: "A portfolio website built with HTML and CSS.",
      url: "https://github.com/DomiUmami/TBuild1.git",
    },
  ];
  return (
    <div className="project-card-container">
    {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
    ))}
    </div>
);
}
*/

 return (
  <div>
    <p className="card-title">Recent Projects</p>
    <div className="project-card-container">
      {repos
      .filter((repo) => !repo.name.toLowerCase().includes("sprint"))
      .filter((repo) => !repo.name.toLowerCase().includes("domiumami"))
      .filter((repo) => !repo.name.toLowerCase().includes("s1m1"))
      .filter((repo) => !repo.name.toLowerCase().includes("orientation"))
      .filter((repo) => !repo.name.toLowerCase().includes("auth"))
      .map((repo) => (
        <ProjectCard
          key={repo.id}
          project={{
            name: repo.name,
            description: repo.description || "No description provided.",
            url: repo.html_url,
          }}
        />
      ))}
    </div>
  </div>
  );
}
