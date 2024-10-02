const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export default {
  getMessages: (req, res) => res.render("index", { messages }),
  getNewMessageForm: (req, res) => res.render("new-message-form"),
  addMessage: (req, res) => {
    const { author, message } = req.body;
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/");
  },
  showMessageById: (req, res) => {
    const { id } = req.params;

    if (messages[id]) {
      res.render("message-details", { message: messages[id] });
    } else {
      res.status(404).render("404");
    }
  },
};
