const projects = [
  {
    title: "InvesteAqui",
    description: "Plataforma com notícias, APIs, banco de dados e análise com IA.",
    image: "img/investeaqui.webp",
    alt: "Arte abstrata azul representando automação de dados do projeto InvesteAqui",
    link: "https://www.linkedin.com/in/snaymi-borges-474891195/overlay/Project/1271117649/treasury/?profileId=ACoAAC3e0lgB7YODdNM4jItBviZzRvKk7bY6Ofs",
  },
  {
    title: "BlackLine",
    description: "Landing page responsiva em React, TypeScript, Vite e Tailwind CSS.",
    image: "img/blackline.webp",
    alt: "Prévia escura representando a landing page BlackLine",
    link: "https://snaymi.github.io/BlackLine/",
  },
  {
    title: "Disney",
    description: "SPA front-end em Vue.js, TypeScript e CSS3 com design responsivo.",
    image: "img/disney+.webp",
    alt: "Prévia do projeto Disney desenvolvido em front-end",
    link: "https://snaymi.github.io/disney-home/",
  },
  {
    title: "Proto.io",
    description: "Showcase gamer com Vue 3, Vite, componentes reutilizáveis e assets WebP/SVG.",
    image: "img/proto-io.webp",
    alt: "Prévia do projeto Proto.io com identidade visual gamer",
    link: "https://snaymi.github.io/proto.io/",
  },
];

const iconLightOrDark = document.querySelector("#light");
const icon = document.querySelector(".ph");
const html = document.documentElement;
const pixelBoxes = document.querySelectorAll(".pixel-box");

function createProjectSlide(project) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide project";

  const banner = document.createElement("div");
  banner.className = "banner-project";

  const link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.alt;

  link.appendChild(image);
  banner.appendChild(link);

  const title = document.createElement("p");
  title.textContent = project.title;

  const description = document.createElement("small");
  description.textContent = project.description;

  slide.appendChild(banner);
  slide.appendChild(title);
  slide.appendChild(description);

  return slide;
}

function renderProjects() {
  const projectWrappers = document.querySelectorAll("[data-projects-wrapper]");

  projectWrappers.forEach((wrapper) => {
    const fragment = document.createDocumentFragment();

    projects.forEach((project) => {
      fragment.appendChild(createProjectSlide(project));
    });

    wrapper.replaceChildren(fragment);
  });
}

function initProjectSwipers() {
  if (typeof Swiper === "undefined") {
    return;
  }

  document.querySelectorAll(".all-projects").forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  });
}

renderProjects();
initProjectSwipers();

if (iconLightOrDark && icon) {
  iconLightOrDark.addEventListener("click", function () {
    iconLightOrDark.classList.toggle("active");

    if (iconLightOrDark.classList.contains("active")) {
      icon.classList.remove("ph-sun");
      icon.classList.add("ph-moon");
      html.classList.toggle("dark");
    } else {
      icon.classList.remove("ph-moon");
      icon.classList.add("ph-sun");
      html.classList.toggle("dark");
    }
  });
}

pixelBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    const content = box.querySelector(".pixel-content");

    if (!content) {
      return;
    }

    content.classList.toggle("hidden");
  });
});

/* =========================
   CHAT IA
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
