# Finsweet Developer Starter

A starter template for both Client & Power projects.

This project contains some preconfigured development tools:

- [Typescript](https://www.typescriptlang.org/): A superset of Javascript that adds an additional layer of Typings, bringing more security and efficiency to the written code.
- [Prettier](https://prettier.io/): Code formating that assures consistency across all Finsweet's projects.
- [ESLint](https://eslint.org/): Code linting that enforces industries' best practises. It uses [our own custom configuration](https://github.com/finsweet/eslint-config) to maintain consistency across all Finsweet's projects.
- [ESBuild](https://esbuild.github.io/): Javascript bundler that compiles, bundles and minifies the original Typescript files.

Resources (work in progress):

- [How to start](#how-to-start)
- [Setting up a custom build directory](#setting-up-a-custom-build-directory)
- [Setting up a path alias](#setting-up-a-path-alias)

## How to start

The quickest way to start developing a new project is by [creating a new repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

After that, open the new repository in your terminal and install the NPM packages by running:

```bash
npm install
```

To build the files, you have two defined scripts:

- `npm run build`: Will build to the production directory (`dist`).
- `npm run dev`: Will build and create a local server that serves all files (check [Serving files on development mode](#serving-files-on-development-mode) for more info).

## Serving files on development mode

When you run `npm run dev`, two things happen:

- ESBuild is set to `watch` mode. Every time that you save your files, the project will be rebuilt.
- A local server is created under `http://localhost:3000` that serves all your project files. You can import them in your Webflow projects like:

```html
<script src="http://localhost:3000/index.js"></script>
```

## Setting up a path alias

Path aliases are very helpful to avoid code like:

```typescript
import example from '../../../../utils/example';
```

Instead, we can create path aliases that map to a specific folder, so the code becomes cleaner like:

```typescript
import example from '$utils/example';
```

You can set up path aliases using the `paths` setting in `tsconfig.json`. This template has an already predefined path as an example:

```json
{
  "paths": {
    "$utils/*": ["src/utils/*"]
  }
}
```
