const express = require("express");

const app = express();
const port = Number.parseInt(process.env.PORT || "3000", 10);

app.use(express.json({ limit: "10kb" }));

const isMessageSafe = (message) => {
  if (typeof message !== "string") {
    return false;
  }
  const lowerMessage = message.toLowerCase();
  return !lowerMessage.includes("<script");
};

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.post("/echo", (request, response) => {
  const message = request.body?.message;
  if (!isMessageSafe(message)) {
    return response.status(400).json({ error: "Message invalide ou dangereux" });
  }
  return response.status(200).json({ message });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Serveur lance sur http://localhost:${port}`);
  });
}

module.exports = { app, isMessageSafe };