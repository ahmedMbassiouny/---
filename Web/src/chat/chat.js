window.onload = function () {
  const name = sessionStorage.getItem("characterName");
  const title = sessionStorage.getItem("characterTitle");
  const imageSrc = sessionStorage.getItem("characterImage");
  const brief = sessionStorage.getItem("characterBrief");
  const dateOfBirth = sessionStorage.getItem("characterDate");
  const showAge = sessionStorage.getItem("showAge") === "true";

  if (name && title && imageSrc && brief && dateOfBirth) {
    document.getElementById("characterName").textContent = name;
    document.getElementById("characterTitle").textContent = title;
    document.getElementById("characterImage").src = imageSrc;
    document.getElementById("characterBrief").textContent = brief;
    document.getElementById("characterDate").textContent = dateOfBirth;

    const ageElement = document.getElementById("age");
    if (ageElement) {
      ageElement.style.display = showAge ? "inline" : "none";
    }
  }
};

const chatContainer = document.getElementById("chat-container");
const typingIndicator = document.getElementById("typing-indicator");

function displayMessage(message, type) {
  const chatRow = document.createElement("div");
  chatRow.className = `chat-row ${type}`;

  const avatar = document.createElement("img");
  avatar.src =
    type === "person1"
      ? "https://via.placeholder.com/40?text=Me"
      : sessionStorage.getItem("characterImage");
  avatar.alt = `${type} Avatar`;
  avatar.className = "avatar";

  const chatBubble = document.createElement("div");
  chatBubble.className = "chat-bubble";
  chatBubble.textContent = message;

  chatRow.appendChild(type === "person2" ? chatBubble : avatar);
  chatRow.appendChild(type === "person2" ? avatar : chatBubble);

  chatContainer.appendChild(chatRow);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
}

function simulateTyping(callback) {
  typingIndicator.style.display = "block";
  setTimeout(() => {
    typingIndicator.style.display = "none";
    callback();
  }, 2000);
}

// Function to send message to API
function sendMessageToAPI(message, characterName) {
  const url = "http://localhost:3000/serve_reply"; // Proxy server for CORS

  const data = {
    message: message,
    character: characterName,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Show typing indicator while waiting for the API response
  typingIndicator.style.display = "block";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const response = xhr.responseText; // Get text
        displayMessage(removeNonArabic(response), "person2"); // Display API response directly
      } catch (error) {
        console.error("Error handling API response:", error);
        displayMessage("عذرا هناك مشكلة في الخادم", "person2");
      } finally {
        // hide typing indicator if response is failed
        typingIndicator.style.display = "none";
      }
    } else if (xhr.readyState === 4) {
      console.error("API request failed with status", xhr.status);
      displayMessage("عذرا هناك مشكلة في الخادم", "person2");
      // hide typing indicator if response is failed
      typingIndicator.style.display = "none";
    }
  };

  xhr.send(JSON.stringify(data));
}

document.getElementById("send-button").addEventListener("click", () => {
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value.trim();
  const characterName =
    sessionStorage.getItem("ApiCharacterName"); /*character_name*/

  if (messageText) {
    displayMessage(messageText, "person1");
    messageInput.value = ""; // Clear input
    simulateTyping(() => {
      sendMessageToAPI(messageText, characterName); // Send message to API
    });
  }
});

function removeNonArabic(text) {
  const arabicRegex = /[^\u0600-\u06FF\s]/g;
  return text.replace(arabicRegex, "");
}
