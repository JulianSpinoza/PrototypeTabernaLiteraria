import mongoose from "mongoose";

const TextSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { discriminatorKey: "typeText", _id: false },
);

// Planing on to do it variable reference...
// or more discriminators?
const ConceptualTextSchema = new mongoose.Schema(
  {
    definition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classifier",
    },
  },
  { _id: false },
);

export const RichTextSchema = new mongoose.Schema({
  blocks: {
    type: [TextSchema],
    required: true,
  },
});

const richTextPath = RichText.path('blocks');

richTextPath.discriminator('ConceptualText', ConceptualTextSchema);

export const RichText = mongoose.model('RichText', RichTextSchema);