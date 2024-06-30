import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:false
  },
  youtubeLink: {
    type: String,
    required: true
  },
  cards: [String]
});

const DeckModel = mongoose.model("Deck",DeckSchema);
export default DeckModel;
