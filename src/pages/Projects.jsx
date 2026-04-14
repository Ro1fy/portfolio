import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="page-header__inner">
          <h1 className="page-header__title">Проекты</h1>
          <p className="page-header__subtitle">Мои работы и пет-проекты</p>
        </div>
      </section>

      <section className="projects__list">
        <div className="projects__list-inner">
          {projects.map(project => (
            <article key={project.id} className="project-detail">
              <h2 className="project-detail__title">{project.title.ru}</h2>
              <p className="project-detail__description">{project.description.ru}</p>
              <div className="project-detail__tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="project-detail__tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
