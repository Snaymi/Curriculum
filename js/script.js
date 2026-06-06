const iconLightOrDark = document.querySelector('#light');
const icon = document.querySelector('.ph');
const html = document.documentElement;
const pixelBoxes = document.querySelectorAll(".pixel-box");

if (iconLightOrDark && icon) {
  iconLightOrDark.addEventListener('click', function () {
    iconLightOrDark.classList.toggle('active');

    if (iconLightOrDark.classList.contains('active')) {
      icon.classList.remove('ph-sun');
      icon.classList.add('ph-moon');
      html.classList.toggle('dark');
    } else {
      icon.classList.remove('ph-moon');
      icon.classList.add('ph-sun');
      html.classList.toggle('dark');
    }
  });
}

pixelBoxes.forEach((box, index) => {
  box.addEventListener("click", function () {
    const content = document.querySelector(`#pixel${index}`);

    if (!content) {
      return;
    }

    content.classList.toggle("hidden");
  });
});


/* =========================
   CHAT IA MOCKADO
========================= */

const aiChatButton = document.querySelector("#aiChatButton");
const aiChatClose = document.querySelector("#aiChatClose");
const aiChatWindow = document.querySelector("#aiChatWindow");
const aiChatForm = document.querySelector("#aiChatForm");
const aiChatInput = document.querySelector("#aiChatInput");
const aiChatMessages = document.querySelector("#aiChatMessages");

const mockResponses = [
  "Snaymi é desenvolvedor Front-End, com foco em criação de interfaces responsivas, componentes reutilizáveis e integração com APIs.",
  "Ele tem experiência com HTML, CSS, JavaScript, Vue, Svelte, Bootstrap, Tailwind CSS e Git.",
  "No portfólio dele existem projetos como Proto.io, Rústico, Odontório, Hardcore, Netflix-Home, Space e Disney Home.",
  "A formação principal dele é em Sistemas de Informação pela Universidade Estácio de Sá, concluída em 2024.",
  "Ele também está cursando Análise e Desenvolvimento de Sistemas pela UniCesumar.",
  "Este chat ainda está em modo demonstração. Em breve ele será conectado a uma IA real para responder com mais precisão."
];

function toggleAiChat() {
  aiChatWindow.classList.toggle("open");

  if (aiChatWindow.classList.contains("open")) {
    setTimeout(() => {
      aiChatInput.focus();
    }, 200);
  }
}

function closeAiChat() {
  aiChatWindow.classList.remove("open");
}

function createMessage(text, type) {
  const message = document.createElement("div");

  message.classList.add("ai-message");

  if (type === "user") {
    message.classList.add("ai-message-user");
  } else {
    message.classList.add("ai-message-bot");
  }

  message.textContent = text;

  aiChatMessages.appendChild(message);
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function getMockResponse() {
  const randomIndex = Math.floor(Math.random() * mockResponses.length);

  return mockResponses[randomIndex];
}

function handleAiChatSubmit(event) {
  event.preventDefault();

  const question = aiChatInput.value.trim();

  if (!question) {
    return;
  }

  createMessage(question, "user");

  aiChatInput.value = "";

  setTimeout(() => {
    const response = getMockResponse();

    createMessage(response, "bot");
  }, 600);
}

if (
  aiChatButton &&
  aiChatClose &&
  aiChatWindow &&
  aiChatForm &&
  aiChatInput &&
  aiChatMessages
) {
  aiChatButton.addEventListener("click", toggleAiChat);
  aiChatClose.addEventListener("click", closeAiChat);
  aiChatForm.addEventListener("submit", handleAiChatSubmit);
}