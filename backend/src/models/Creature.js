import mongoose from "mongoose";

function generateSlug(name, stats) {
  let base = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const hasStats =
    stats && (stats.hp !== undefined || stats.armor !== undefined);

  if (!hasStats) {
    base += "-no-stats";
  }

  return base;
}

const CreatureSchema = new mongoose.Schema(
  {
    // Business Identificator
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    tier: {
      type: {
        form: {
          type: String,
          enum: {
            values: ["Pácifico", "Menor", "Alfa", "Pensante"],
            message: "{VALUE} no es un categoria de tier forma.",
          },
          required: true,
        },
        color: {
          type: String,
          enum: {
            values: ["Bronce", "Plata", "Oro", "Platino", "Rubí"],
            message: "{VALUE} no es un categoria de tier color.",
          },
          required: true,
        },
      },
      required: [true, "Las criaturas deben asociar a un tier."],
    },

    habitat: {
      type: String,
      required: [true, "Las criaturas deben pertenecer a un habitat."],
      trim: true,
    },

    biome: {
      type: String,
      required: [true, "Las criaturas deben pertenecer a un bioma."],
      trim: true,
    },

    stats: {
      type: {
        hp: {
          type: Number,
          required: false,
          min: [1, "No puede haber una criatura con vida negativa o nula."],
        },

        armor: {
          type: Number,
          required: false,
          min: [1, "No puede haber una criatura con armadura negativa o nula."],
        },
      },
      required: false,
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

        ret.id = ret.slug;
        delete ret.slug;

        delete ret.createdAt;
        delete ret.updatedAt;

        // While is empty
        if (!ret.habilities?.length) {
          delete ret.habilities;
        }

        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

CreatureSchema.pre("validate", function () {
  if (!this.slug && this.name) {
    this.slug = generateSlug(this.name, this.stats);
  }
});

// Revisar este Virtual con la logica planteada en el modelo de Classifier
CreatureSchema.virtual('tierName').get(function() {
  return `${this.tier.color} ${this.tier.form}`;
});

export const Creature = mongoose.model("Creature", CreatureSchema);
