const messages = [
  {
    text: "Stay hungry, stay foolish.",
    user: "Steve Jobs",
    added: new Date(),
  },
  {
    text: "The best way to predict the future is to invent it.",
    user: "Alan Kay",
    added: new Date(),
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    user: "Franklin D. Roosevelt",
    added: new Date(),
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    user: "Albert Einstein",
    added: new Date(),
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    user: "Winston Churchill",
    added: new Date(),
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    user: "Steve Jobs",
    added: new Date(),
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    user: "John Lennon",
    added: new Date(),
  },
  {
    text: "The purpose of our lives is to be happy.",
    user: "Dalai Lama",
    added: new Date(),
  },
  {
    text: "Get busy living or get busy dying.",
    user: "Stephen King",
    added: new Date(),
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    user: "Ralph Waldo Emerson",
    added: new Date(),
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    user: "Confucius",
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
