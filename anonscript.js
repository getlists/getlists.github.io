const messageArea = document.getElementById("messageArea");
const messageInput = document.getElementById("messageInput");

function appendMessage(message, sender) {
  const newMessage = document.createElement("div");
  newMessage.textContent = `${sender}: ${message}`;
  messageArea.appendChild(newMessage);

  // Scroll to the bottom of the message area
  messageArea.scrollTop = messageArea.scrollHeight;
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== "") {
    // In a real chat application, you'd send the message to the server here.
    // For this example, we'll just display it in the message area.
    appendMessage(message, "You");
    messageInput.value = "";
  }
}

// Example: Receiving a message from another user
setTimeout(() => {
  appendMessage("Hello there!", "Anonymous User");
}, 1500);
