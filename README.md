# Finsweet Developer Starter

A starter template for both Client & Power projects. This project contains:

- Preconfigured development tools:

  - [Typescript](https://www.typescriptlang.org/): A superset of Javascript that adds an additional layer of Typings, bringing more security and efficiency to the written code.
  - [Prettier](https://prettier.io/): Code formating that assures consistency across all Finsweet's projects.
  - [ESLint](https://eslint.org/): Code linting that enforces industries' best practises. It uses [our own custom configuration](https://github.com/finsweet/eslint-config) to maintain consistency across all Finsweet's projects.
  - [ESBuild](https://esbuild.github.io/): Javascript bundler that compiles, bundles and minifies the original Typescript files.

- Learning resources for new team members:

  - [Learning Typescript](#typescript): Everything you need to start confidently coding with Typescript.
  - [Coding best practises](#best-practises): Learn how to write clean and semantic code that is easily understandable by your teammates.
  - [Setting up your development environment](#dev-environment): Learn how to set up VSCode and to use the development tools included in this repository
  - [Development workflows](#dev-workflows): See examples of workflows from your local environment to Webflow.
  - [Git](#git): Learn how to collaborate with your teammates' code!

## How to start

The quickest way to start developing a new project is by [creating a new repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

After that, open the new repository in your terminal and install the NPM packages by running:

```bash
npm install
```

To build the files, you have two defined scripts:

- `npm run build`: Will build to the production directory (`dist`).
- `npm run dev`: Will build to your custom directory, if defined (check [Setting up a custom build directory](#setting-up-a-custom-build-directory) for more info).

## Setting up a custom build directory

By default, the output of the build files is set to the `dist` folder (check `bin/build.js`), but you can define a custom output directory for development purposes.

To do so, create a `.env` file that contains a `CUSTOM_BUILD_DIRECTORY` key. You can check `.env.example` for an example.
