# The Hitchhiker's Guide to the Web 🚀

This is a collection of my learnings about frontend development (and beyond). I try to explain concepts the way I would've loved to read about them when I was just starting. It will keep growing as I review fundamentals and explore new topics 🌱

## 💻 Tech Stack

This blog has been created with the awesome [AstroPaper template](https://github.com/satnaing/astro-paper). My goal was to start publishing content quickly, therefore only minimal changes have been implemented to make it mine.

**Main Framework** - [Astro](https://astro.build/)
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)
**Component Framework** - [ReactJS](https://reactjs.org/)
**Styling** - [TailwindCSS](https://tailwindcss.com/)
**Fuzzy Search** - [FuseJS](https://fusejs.io/)
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)
**Linting** - [ESLint](https://eslint.org)
**Code Formatting** - [Prettier](https://prettier.io/)
**Deployment** - [GitHub Pages](https://pages.github.com/)

## 👩‍💻 Getting Started

If you want to take a look at this project locally, run the following commands:

```bash
git clone https://github.com/lauraferrandof/lauraferrandof.github.io.git

npm i

npm run dev
```

## 🥷 Available Scripts

> **_Note!_** For `Docker` commands we must have it [installed](https://docs.docker.com/engine/install/) in your machine.

| Command                              | Action                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`                        | Installs dependencies                                                                                                            |
| `npm run dev`                        | Starts local dev server at `localhost:4321`                                                                                      |
| `npm run build`                      | Build your production site to `./dist/`                                                                                          |
| `npm run preview`                    | Preview your build locally, before deploying                                                                                     |
| `npm run format:check`               | Check code format with Prettier                                                                                                  |
| `npm run format`                     | Format codes with Prettier                                                                                                       |
| `npm run sync`                       | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `npm run lint`                       | Lint with ESLint                                                                                                                 |
| `docker compose up -d`               | Run AstroPaper on docker, You can access with the same hostname and port informed on `dev` command.                              |
| `docker compose run app npm install` | You can run any command above into the docker container.                                                                         |
| `docker build -t astropaper .`       | Build Docker image for AstroPaper.                                                                                               |
| `docker run -p 4321:80 astropaper`   | Run AstroPaper on Docker. The website will be accessible at `http://localhost:4321`.                                             |

> **_Warning!_** Windows PowerShell users may need to install the [concurrently package](https://www.npmjs.com/package/concurrently) if they want to [run diagnostics](https://docs.astro.build/en/reference/cli-reference/#astro-check) during development (`astro check --watch & astro dev`). For more info, see [this issue](https://github.com/satnaing/astro-paper/issues/113).

## ✨ Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [email](mailto:lauraferrandof@gmail.com). Alternatively, feel free to open an issue if you find bugs or want to request new topics for the blog!.

## 📜 License

Licensed under the MIT License, Copyright © 2023
