# Project Showcase

This project serves as a learning exercise to explore Next.js 15 and reinforce key concepts such as Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Generation (ISG), Partial Prerendering (PPR), authentication with NextAuth, and more. It also integrates various modern tools and frameworks to build a functional portfolio showcase.

## 🚀 Technologies Used

- **Next.js 15** – Latest version of Next.js for hybrid rendering strategies
- **React 19** – Leveraging the latest React features
- **TypeScript** – Strongly typed JavaScript for maintainability
- **NextAuth** – OAuth authentication support
- **Sanity CMS** – Headless CMS for content management
- **Shadcn** – UI component library for a polished design
- **Tailwind CSS** – Utility-first styling framework
- **Sentry** – Performance monitoring and error tracking

## ✨ Key Features

- **OAuth Authentication** – Secure login system with NextAuth
- **Sanity CMS Integration** – Manage content dynamically via Sanity
- **Sentry Performance & Bug Tracking** – Monitors app performance and logs issues
- **Partial Prerendering (PPR)** – Optimized rendering on Project and User Details pages

## 🔧 Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/ShivamAmin/project-showcase.git
   cd project-showcase
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Authjs: Generate an auth token by running: ```npm exec auth secret```
     - Register a new Github app as described [here](https://authjs.dev/guides/configuring-github?framework=next-js#registering-your-app) to generate a Github ID and Github Secret
   - Sanity: Create a new project within Sanity (From scratch using CLI) and run the following with your project id
     ```sh
     npm create sanity@latest -- --project <project id> --dataset production --template clean
     ```
     - When asked, install create-sanity, choose your existing project, choose production dataset, add configuration files, use typescript, embed sanity studio, leave the route as default, overwrite files when asked, choose the clean project template option, add project id and dataset to env file
     - Generate a Sanity Write Token by navigating to Project > API > Tokens > Create Token with 'Editor' permissions
     - Add a new export in sanity/env.ts: ```export const token = process.env.SANITY_WRITE_TOKEN;```
   - Sentry: Create a new Nextjs project within Sentry and run the wizard command to setup Sentry.
     - If the command fails, choose not to update @sentry/nextjs when trying again.
   - run ```npm install``` to resolve module not found errors

4. Start the development server:
   ```sh
   npm run dev
   ```

## 🐳 Deployment with Docker

You can deploy the project using Docker:

1. Copy the contents of env.local to env.production with the necessary changes

2. Build the Docker image:
   ```sh
   docker build -t project-showcase:latest .
   ```
3. Run the container:
   ```sh
   docker run -p 3000:3000 -e AUTH_URL='http://localhost:3000' project-showcase
   ```

## 🛣️ Roadmap

Planned future improvements:
- Allow users to add comments to projects

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Acknowledgments

This project was initially built by following a tutorial to get hands-on experience with Next.js 15 and modern web development practices.

Credit to **JavaScript Mastery** for their tutorial: [Next.js 15 Crash Course](https://www.youtube.com/watch?v=Zq5fmkH0T78).

---

Feel free to fork this repository and modify it for your own learning or portfolio purposes! 🚀
