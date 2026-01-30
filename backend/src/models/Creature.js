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
        required: false,
        min: 0,
      },

      armor: {
        type: Number,
        required: false,
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


CreatureSchema.virtual('tierName').get(function() {
  return `${this.tier.color} ${this.tier.form}`;
});

export default mongoose.model("Creature", CreatureSchema);
