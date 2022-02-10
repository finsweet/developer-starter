(() => {
  // src/utils/log.ts
  var helloStarter = (name) => {
    console.log(`Hello ${name}!`);
    console.log('Is this a short code snippet? Try compiling this file with Typescript by running the "tsc" command on your terminal.');
    console.log('Is this a big project? Try bundling and minifying the files with ESBuild by adding them in the "build.js" config file and running the "npm run build" command on your terminal.');
  };

  // src/index.ts
  document.addEventListener("DOMContentLoaded", () => {
    const name = "John Doe";
    helloStarter(name);
  });
})();
/*! This comment will be untouched when compiling */
//# sourceMappingURL=index.js.map
