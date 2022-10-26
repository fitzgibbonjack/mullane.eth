# Mullane.eth - Website

## Project Overview

-   Release: 2.0.0
-   Developer: Jack Fitzgibon

-   <a href="https://app.fleek.co/#/sites/mullane/overview?accountId=e41f8f4f-f678-46dc-ab17-40d322ffa757" target="_blank">
         <img src="https://i.ibb.co/Vxqw5XM/logo.png" alt="Fleek CI/CD" width="32px"
    		style="vertical-align: middle">
    		Deployment & Hosting
     </a>
-   <a href="https://app.fleek.co/#/sites/mullane/overview?accountId=e41f8f4f-f678-46dc-ab17-40d322ffa757" target="_blank">
         <img src="https://assets.website-files.com/5c8bce998bdcd3b7371625fa/624376c93c16bcd235c4c07d_sanity-logo.png" alt="Fleek CI/CD" width="32px"
    		style="vertical-align: middle">
    		Content Management
     </a>

### Stack

-   Gatsby (Frontend)
-   TypeScript
-   SCSS (CSS Preproccesor)
-   Sanity (Content Management)

### Introduction

This second release of my personal website is built upon Gatsby, using Static Site Generation.

Previously, CRA was chosen at the time as I was very new to development, I now realise that it is far from the suitable choice for a brochure site. Gatsby provides improved SEO (static HTML rather than client side rendering handled by JS) and decreased page load times. This all helps with search engine rankings.

The last main objective with this piece of work is to move the hosting over to a decentralised protocol, specifically one that is supported by ENS (Ethereum Name Service) domains. This will allow me to make use of my current .eth domain, and reap the benefits of the IPFS protocol - such as decreased bandwidth via obtaining files from multiple peers at once.

### Architecture

<img src="https://i.ibb.co/NNqJqwG/Web-hook-triggers-build-deploy.png" width="469px"/>

## Development

In the root directory you can run:

##### `gatsby develop`

Runs a server in the background, enabling useful features like live reloading and Gatsby’s data explorer.

##### `gatsby build`

Creates a version of your site with production-ready optimizations like packaging up your site’s config, data, and code, and creating all the static HTML pages that eventually get rehydrated into a React application.
