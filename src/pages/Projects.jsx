import { useQuery, gql } from "@apollo/client";
import Project from "../components/Project/Project";
import Wave from "../components/Wave/Wave";
import Navigation from "../components/Navigation/Navigation";
import "./Projects.scss";

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        id
        attributes {
          title
          description
          githubUrl
          liveUrl
          badges {
            data {
              attributes {
                badge
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(PROJECTS);
  if (error) console.log(error);

  return (
    <>
      <Navigation />

      <Wave height="2rem" />

      <main className="main--projects">
        <section className="container">
          <h2 className="projects__title">&#x1F4BB; - Projects</h2>
          <p>
            In the short time that I have been a front-end developer, I have
            built many websites and applications, from simple static landing
            pages, to complex dynamic applications.
          </p>

          <div className="projects">
            {loading
              ? [" ", " ", " "].map((project, i) => (
                  <Project
                    skeleton="true"
                    data={project.attributes}
                    color="white"
                    key={i}
                  />
                ))
              : data.projects.data.map((project, i) => (
                  <Project data={project.attributes} color="white" key={i} />
                ))}
          </div>
        </section>
      </main>

      <Wave flipped="true" />
    </>
  );
}

export default Projects;
