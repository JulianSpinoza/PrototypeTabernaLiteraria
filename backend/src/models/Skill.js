import mongoose from "mongoose";
import { RichTextSchema } from "../schemas/RichText";

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  skill_type: {
    type: String,
    enum: {
      values: ["active", "simple_active", "pasive", "preparation", "reactive"],
      message: "{VALUE} no es un tipo de habilidad.",
    },
    required: true,
  },

  // This value is kinda a recommendation
  difficult_level: {
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: function (v) {
        return typeof v === "string" || typeof v === "number";
      },
      message: `{VALUE} no es un tipo de dato válido. Debe ser String o Number.`,
    },
    required: false,
  },

  modifier: {
    type: String,
    enum: {
      values: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
      message: "{VALUE} no es un modificador para la habilidad.",
    },
    required: false,
  },

  // Think of a way to conect each part of the meaning
  // of each words on the description
  description: {
    type: RichTextSchema,
    required: true,
  },

  // Measured by squares
  range: {
    type: Number,
    required: false,
  },

  // Measured by squares
  area_of_effect: {
    type: {
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
    },
    required: false,
  },

  // It hasn't have a clear schema
  duration: {
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: function (v) {
        return typeof v === "string" || typeof v === "number";
      },
      message: `{VALUE} no es un tipo de dato válido. Debe ser String o Number.`,
    },
    required: false,
  },

  concentrate: {
    type: Boolean,
    required: false,
  },
});

export const Skill = mongoose.model("Skill", SkillSchema);