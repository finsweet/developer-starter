// Starter example. Check the comments!
document.addEventListener('DOMContentLoaded', () => {
  const name = 'John Doe';
  helloStarter(name);
});

/**
 * This JSDoc comment is used to describe the purpose of the function: Prints some welcome messages on the console.
 * @param name - This is a description of the function parameter: The name that will be printed on the console.
 */
const helloStarter = (name: string) => {
  console.log(`Hello ${name}!`);

  /*! This comment will be untouched when compiling */
  console.log(
    'Is this a short code snippet? Try compiling this file with Typescript by running the "tsc" command on your terminal.'
  );

  // This comment will be removed when compiling
  console.log(
    'Is this a big project? Try bundling and minifying the files with ESBuild by adding them in the "build.js" config file and running the "npm run build" command on your terminal.'
  );
};
