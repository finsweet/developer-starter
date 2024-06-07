import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name: number = 'John Doe';
  greetUser(name);
});
