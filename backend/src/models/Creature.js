import mongoose from "mongoose";

const CreatureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    tier: {
      type: String,
      enum: ["S", "A", "B", "C"],
      required: true,
    },

    habitat: {
      type: String,
      required: true,
      trim: true,
    },

    biome: {
      type: String,
      required: true,
      trim: true,
    },

    hp: {
      type: Number,
      required: true,
      min: 0,
    },

    armor: {
      type: Number,
      required: true,
      min: 0,
    },

    image: {
      type: String,
    },

    habilities: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Creature", CreatureSchema);
