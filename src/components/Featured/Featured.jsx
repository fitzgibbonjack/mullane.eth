import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./Featured.scss";
import Project from "../Project/Project";
import "../Button/Button.scss";

const FEATURED = gql`
  query GetProjects {
    projects(filters: { featured: { eq: true } }) {
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

export default function Featured() {
  const { loading, error, data } = useQuery(FEATURED);
  if (error) console.log(error);

  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured__title">&#128187; - Featured Projects</h2>
        <div className="projects">
          {loading
            ? [...Array(3)].map((project, i) => (
                <Project skeleton="true" key={i} />
              ))
            : data.projects.data.map((project, i) => (
                <Project data={project.attributes} key={i} />
              ))}
        </div>
        <a href="/projects" className="button--primary featured__button">
          view all projects
        </a>
      </div>
    </section>
  );
}
