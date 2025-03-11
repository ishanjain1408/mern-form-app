const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [
    {
      type: { type: String, required: true },
      label: { type: String, required: true },
      options: [{ type: String }],
      required: { type: Boolean, default: false },
    },
  ],
  responses: [
    {
      data: { type: mongoose.Schema.Types.Mixed },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);