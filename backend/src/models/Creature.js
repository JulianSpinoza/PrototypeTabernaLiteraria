import mongoose from "mongoose";

const CreatureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    tier: {
      form: {
        type: String,
        enum: ["Pácifico", "Menor", "Alfa", "Pensante"],
        required: true,
      },
      color: {
        type: String,
        enum: ["Bronce", "Plata", "Oro", "Platino", "Rubí"],
        required: true,
      },
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

    stats: {
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
    },

    image: {
      url: {
        type: String,
      },
    },

    habilities: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.image = {
          ...ret.image,
          alt: `Carta bestiario: ${ret.name}`,
        };

        delete ret.tier.color;
        delete ret.tier.form;
        delete ret.id;

        delete ret.createdAt;
        delete ret.updatedAt;

        // While is empty
        delete ret.habilities;

        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

CreatureSchema.virtual('tierName').get(function() {
  return `${this.tier.color} ${this.tier.form}`;
});

export default mongoose.model("Creature", CreatureSchema);
