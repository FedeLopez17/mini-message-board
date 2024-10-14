import db from "../db/queries.js";

export default {
  getMessages: async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { messages });
  },

  getMessageById: async (req, res) => {
    const { id } = req.params;

    const message = await db.getMessageByID(id);
    if (message) {
      res.render("message-details", { message: message });
    } else {
      res.status(404).render("404");
    }
  },

  getNewMessageForm: (req, res) => res.render("new-message-form"),

  addMessage: async (req, res) => {
    const { message, author } = req.body;
    await db.insertMessage(message, author);
    res.redirect("/");
  },
};
