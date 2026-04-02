import mongoose from "mongoose";

function generateSlug(name) {

  // Revisar con carto que es muy variable para la criatura (tanto para crear otra carta)
  // (Posiblemente juntar con Habitat, pues es muy variable)
  
  let base = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
  
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

    creature_tier: {
      type: {
        creature_form: {
          type: String,
          enum: {
            values: [
              "creature_pacific",
              "creature_minor",
              "creature_alpha",
              "creature_thinker",
            ],
            message: "{VALUE} no es un categoria de tier forma.",
          },
          required: true,
        },
        creature_color: {
          type: String,
          enum: {
            values: [
              "creature_bronce",
              "creature_silver",
              "creature_gold",
              "creature_platinum",
              "creature_rubi",
            ],
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
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },

        armor: {
          type: Number,
          required: false,
          min: [1, "No puede haber una criatura con armadura negativa o nula."],
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
      },
      required: false,
    },

    image: {
      url: {
        type: String,
      },
    },

    existence: {
      type: {
        is_unique: {
          type: Boolean,
        },
        state: {
          type: String,
          enum: {
            // Tener en cuenta que "Extinta" solo vale si no es única
            // (Posible crear un clasificador)
            values: ["Con vida", "Fallecida", "Desaparecida", "Extinta"],
            message: "{VALUE} no es un estado de existencia de la criatura.",
          },
          default: "Con vida",
        },
      },
      required: true,
    },

    description: {
      type: String,
    },

    habilities: {
      type: Array,
      default: [],
    },

    attributes: {
      type: {
        strength: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
        dexterity: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
        constitution: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
        intelligence: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
        wisdom: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
        charisma: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message:
              "Error en el campo {PATH}: {VALUE} no es un número entero.",
          },
        },
      },
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.image = {
          ...ret.image,
          alt: `Carta bestiario: ${ret.name}`,
        };

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
  },
);

CreatureSchema.pre("validate", function () {
  if (!this.slug && this.name) {
    this.slug = generateSlug(this.name);
  }
});


export const Creature = mongoose.model("Creature", CreatureSchema);
