const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  eventString: { type: String, required: true},
  host: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  briefDetails: { type: String, required: true },
  details: { type: String, required: true },
  bannerImage: { type: String, required: false },
  eventType: { type: String, required: true },
  category: {
    first: { type: String, required: true },
    second: { type: String, required: false },
    third: { type: String, required: false }
  },
  menu: Array,
  datesOpen: Array,
  location: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;