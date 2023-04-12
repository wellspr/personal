import Tags from "../components/Tags";
import useProjects from "../hooks/useProjects";

const Projects = () => {

    const { projects, error, loading } = useProjects();

    const renderProjectsList = () => {

        if (error) {
            return <div className="error">
                Sorry, could not load projects.
            </div>
        }

        if (loading) {
            return <div className="loading">
                Loading...
            </div>
        }

        return projects && projects.map((p, i) => {
            if (!p.published) return null;
            return <div className="project" key={i}>
                <div className="project__header">
                    <div className="project__title">{ p.title }</div>
                </div>

                <div className="project__body">
                    <div className="project__desc">
                        { p.description }
                    </div>

                    <Techstack 
                        project={p} 
                        className="project__techstack"
                    />
                </div>

                <div className="project__footer">
                    <Link link={p.githubLink} className="project__link" label="Github" />
                    <Link link={p.liveSite} className="project__link" label="Live" />
                    <Tags tags={p.tags} />
                </div>
            </div>
        });
    };

    return <div className="projects">
        { renderProjectsList() }
    </div>
};


const Techstack = ({ project, className }) => {
    return <div className={className}>
        {
            project.techstack.map(tech => {
                const key = Math.floor(Math.random()*100000);
                return <li key={key}>
                    { tech.category }: { tech.description }
                </li>
            })
        }
    </div>;
};

const Link = ({ link, label, className }) => {
    if (!link) return null;

    return <a 
        className={className} 
        href={link} 
        target="_blank" 
        rel="noreferrer"
        >
        {label}
    </a>;
};

export default Projects;