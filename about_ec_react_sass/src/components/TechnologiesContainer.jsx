import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiMsqlServer,
    DiMysql,
    DiMongodb,
    DiGit,
    DiGithubBadge
} from "react-icons/di";

import { SiTypescript } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "sqlserver", name: "SQL Server", icon: <DiMsqlServer /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb /> },
    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
];

function TechnologiesContainer() {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            

                            {tech.id === "html" ? (
                                <p>Markup Language</p>
                            ) : tech.id === "css" ? (
                                <p>Style Language</p>
                            )
                                : tech.id === "js" ? (
                                    <p>Programming Language</p>
                                )
                                    : tech.id === "ts" ? (
                                        <p>JavaScript Superset</p>
                                    )
                                        : tech.id === "node" ? (
                                            <p>JS Exec Environment</p>
                                        )
                                            : tech.id === "react" ? (
                                                <p>JavaScript Library</p>
                                            )
                                                : tech.id === "sqlserver" ? (
                                                    <p>Relational DBMS</p>
                                                )
                                                    : tech.id === "mysql" ? (
                                                        <p>Relational DBMS</p>
                                                    )
                                                        : tech.id === "mongodb" ? (
                                                            <p>Non-Relational DBMS</p>
                                                        )
                                                            : tech.id === "git" ? (
                                                                <p>Version System</p>
                                                            )
                                                                : (
                                                                    <p>Source Code Hosting</p>
                                                                )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer