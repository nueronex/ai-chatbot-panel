let chatHistory = [];

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";

  chatHistory.push({ role: "user", content: message });

  appendMessage("bot", "Typing...");

  setTimeout(() => {
    const reply = getAdvancedReply(message);
    chatHistory.push({ role: "bot", content: reply });

    const chatBox = document.getElementById("chat-box");
    chatBox.lastChild.textContent = reply;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 900);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "user" ? "user-message" : "bot-message";
  msgDiv.textContent = text;
  document.getElementById("chat-box").appendChild(msgDiv);
}

// Voice Recognition
function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  const micBtn = document.getElementById("mic-btn");
  micBtn.textContent = "🎙";
  micBtn.disabled = true;

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("user-input").value = transcript;
    sendMessage();
    micBtn.textContent = "🎤";
    micBtn.disabled = false;
  };

  recognition.onerror = function () {
    alert("Voice recognition failed. Please try again.");
    micBtn.textContent = "🎤";
    micBtn.disabled = false;
  };

  recognition.onend = function () {
    micBtn.textContent = "🎤";
    micBtn.disabled = false;
  };
}

// Smart reply (same as previous version)
function getAdvancedReply(input) {
  const msg = input.toLowerCase();
  const intents = {
    greeting: /hi|hello|hey|good (morning|evening)/,
    pricing: /price|cost|charges|plans|fee/,
    support: /help|support|problem|issue|not working|error/,
    services: /services|features|offer|tools/,
    complaint: /angry|complaint|refund|bad|unsatisfied/,
    thanks: /thank|thanks/,
    goodbye: /bye|see you|later/,
    emotion_sad: /sad|depressed|unhappy|tired/,
    emotion_happy: /happy|awesome|joy|great/,
  };

  const matchedIntents = Object.entries(intents)
    .filter(([intent, regex]) => regex.test(msg))
    .map(([intent]) => intent);

  if (matchedIntents.includes("complaint")) {
    return "I'm sorry to hear that. I'm escalating this to human support.";
  }
  if (matchedIntents.includes("emotion_sad")) {
    return "I'm here for you. You're not alone. Talk to me anytime.";
  }
  if (matchedIntents.includes("emotion_happy")) {
    return "Love the energy! Keep it going 🌟";
  }
  if (matchedIntents.includes("greeting")) {
    return "Hi there! How can I help you today?";
  }
  if (matchedIntents.includes("pricing")) {
    return "Our plans start at ₹499/month. Want details?";
  }
  if (matchedIntents.includes("services")) {
    return "We offer chat support, CRM, analytics, and ticket tracking.";
  }
  if (matchedIntents.includes("support")) {
    return "Please describe your issue. I'm here to help!";
  }
  if (matchedIntents.includes("thanks")) {
    return "You're welcome! 😊";
  }
  if (matchedIntents.includes("goodbye")) {
    return "Goodbye! Have a wonderful day.";
  }

  return "Hmm... I didn’t understand that. Can you rephrase?";
}
