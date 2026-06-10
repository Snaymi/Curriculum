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

  return message;
}



async function handleAiChatSubmit(event) {
  event.preventDefault();

  const question = aiChatInput.value.trim();

  if (!question) {
    return;
  }

  createMessage(question, "user");

  aiChatInput.value = "";
  aiChatInput.disabled = true;

  const submitButton = aiChatForm.querySelector("button");
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  const loadingMessage = createMessage("Pensando...", "bot");

  try {
    const response = await sendMessageToGroq(question);

    loadingMessage.textContent = response;
  } catch (error) {
    console.error("Erro ao conversar com a IA:", error);

    loadingMessage.textContent =
      error.message || "Não foi possível conectar ao assistente no momento.";
  } finally {
    aiChatInput.disabled = false;
    submitButton.disabled = false;
    submitButton.textContent = "Enviar";
    aiChatInput.focus();
  }
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