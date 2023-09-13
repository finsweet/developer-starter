import TypeIt from 'typeit';

const form = document.querySelector('.user-input_form-block');
const chatContainer = document.querySelector('.chat-conversations_wrapper'); // scrolling element
const submitBtn = document.querySelector('.btn_submit');
const userInput = document.querySelector('.input-field');
const resetBtn = document.querySelector('.reset');

// clear chat
handleResetChat();

// First input
userInput.value = "Who's Mohamed Azzam?";

// Generate Responses on form submittion
form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
});
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleSubmit();
});

// handle reset Btn - delete the current chat
resetBtn.addEventListener('click', (e) => {
  e.preventDefault;
  handleResetChat();
});

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
let isScrolledUp = false;

chatContainer.addEventListener('scroll', (e) => {
  const scrollTopPosition = chatContainer.scrollTop;

  isScrolledUp = chatContainer.scrollTop < (lastScrollTop || 0) ? true : false;
  lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  // if (window.scrollY < this.lastScrollTop) console.log('hes');
});

function handleSubmit() {
  // Prevent user from submitting new input while the bot is generating
  userInput.disabled = true;
  submitBtn.disabled = true;

  // store the user input to show
  const userText = userInput.value;

  // Simulate the bot response (should came from api)
  const responseText = `Mohamed Azzam is a Front-End developer and Webflow enthusiast. <br><br>He specializes in front-end development, with Webflow as his primary tool, and occasionally incorporates custom code to overcome limitations. With over 2 years of experience, he has succeeded both as an independent freelancer and as a valuable member of collaborative teams. <br>His impressive track record includes the successful completion of more than 45 projects on Upwork.`;

  // generate the HTML markup
  const markup = `
  <div class="user-response">
    <div class="user-avatar"></div>
    <div>${userText}</div>
  </div>
  <div class="bot-response">
    <div class="bot-avatar"></div>
    <div class="bot-flex">
    <div>
      <span class="fetched-response hidden" >${responseText}</span>
      <span class="response-placeholder">
      </span>
    </div>
      
      <div class="bot-response-links_wrapper hidden">
        <div class="text-weight-bold">Learn more:</div>
        <a href="https://www.linkedin.com/in/mo-azzam/" class="link"><span class="link-number">1.</span> LinkedIn</a>
        <a href="#" class="link"><span class="link-number">2.</span> Github</a>
        <a href="#" class="link"><span class="link-number">3.</span> Twitter</a>
        <a href="#" class="link"><span class="link-number">+2</span> more</a>
      </div>
      <div class="bot-response-reactions_wrapper hidden">
        <a href="#" class="link is--white w-inline-block">
          <img src="https://uploads-ssl.webflow.com/64fef736bfe03703b2b0d158/64ff0b84ff8966ce1db82238_Group.svg" loading="lazy" alt="" class="icon-1rem">
        </a>
        <a href="#" class="link is--white w-inline-block">
          <img src="https://uploads-ssl.webflow.com/64fef736bfe03703b2b0d158/64ff0b83085eaf1f1f7654aa_Group-1.svg" loading="lazy" alt="" class="icon-1rem">
        </a>
        <a href="#" class="link is--white w-inline-block">
          <img src="https://uploads-ssl.webflow.com/64fef736bfe03703b2b0d158/64ff0b8386c787d7201a1f95_Vector.svg" loading="lazy" alt="" class="icon-1rem">
        </a>
        <a href="#" class="link is--white w-inline-block">
          <img src="https://uploads-ssl.webflow.com/64fef736bfe03703b2b0d158/64ff0a2cb5fa37c0eb07854e_Google_Icons-09-512.webp" loading="lazy" alt="" class="icon-1-5rem">
          <div>Google it</div>
        </a>
        </div>
      </div>
  </div>`;

  chatContainer.insertAdjacentHTML('beforeend', markup);

  userInput.value = '';

  const typeIt = new TypeIt('.response-placeholder', {
    strings: `${responseText}`,
    speed: 10,
    loop: false,
    lifeLike: true,
    startDelay: 250, // Simulate fetching time
    afterStep: async (instance) => {
      // stop on scroll up

      console.log(isScrolledUp);
      isScrolledUp ? null : chatContainer.scrollTo(0, chatContainer.scrollHeight);

      // Will fire after each step in the queue.
      // This is to keep the chat scrolled down - I don't recommend that for performance
    },
    afterComplete: async (instance) => {
      typeIt.destroy();

      // select the links (should be controlled on some conditions) & reactions to show them after finished
      const links = document.querySelectorAll('.bot-response-links_wrapper');
      const reactions = document.querySelectorAll('.bot-response-reactions_wrapper');

      links.forEach((link) => link.classList.remove('hidden'));
      reactions.forEach((reaction) => reaction.classList.remove('hidden'));

      chatContainer.scrollTo(0, chatContainer.scrollHeight);

      // Get ready to the next call
      userInput.disabled = false;
      submitBtn.disabled = false;

      // To prevent Typekit from mutating the recent calls
      document.querySelector('.response-placeholder').classList.remove('response-placeholder');
      document.querySelector('.fetched-response').classList.remove('fetched-response');
    },
  }).go();
}

function handleResetChat() {
  chatContainer.innerHTML = ' ';
}
