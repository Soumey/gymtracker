import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  exercise: [{
    name: { type: String},
    description: { type: String },
    link: { type: String }
  }]
});

const DeckModel = mongoose.model("Deck",DeckSchema);
export default DeckModel;
