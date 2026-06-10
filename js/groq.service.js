const GROQ_CHAT_API_URL = 'https://curriculum-api-izmc.onrender.com/api/groq/chat'

async function sendMessageToGroq(message) {
  const response = await fetch(GROQ_CHAT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro ao conversar com o assistente.");
  }

  return data.response;
}