import mongoose from "mongoose";

const ClassifierSchema = new mongoose.Schema(
  {
    image: {
      type: {
        url: {
          type: String,
        },
      },
      required: false,
    },

    // Business Identificator
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Name of the instance of classification
    name: {
      type: String,
      required: [true, "Un clasificador debe contar con un nombre."],
      trim: true,
    },

    // Concept group of which it belong (classification group)
    category: {
      type: {
        slug: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          trim: true,
        },
      },
      required: [true, "Especificar qué se esta clasificando."],
    },

    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    discriminatorKey: "typeClassifier",
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.category._id;
        delete ret.createdAt;
        delete ret.updatedAt;

        return ret;
      },
    },
  },
);

export const Classifier = mongoose.model("Classifier", ClassifierSchema);

const ComposedClassifierSchema = new mongoose.Schema(
  {
    composedClassifier: {
      type: Map,
      of: String,
      required: true,
      validate: [
        {
          validator: function (v) {
            return v.size >= 2 
          },
          message: "Un clasificador compuesto debe tener por lo menos la agrupación de dos clasificadores.",
        },
        {
          validator: function (v) {
            const values = Array.from(v.values());
            const uniqueValues = new Set(values);
            return uniqueValues.size === values.length;
          },
          message: "El clasificador compuesto no debe contener clasificadores con el mismo valor.",
        }
      ]
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.category._id;
        delete ret.typeClassifier;
        delete ret.createdAt;
        delete ret.updatedAt;

        ret.items = ret.composedClassifier;

        return ret;
      },
    },
  },
);

export const ComposedClassifier = Classifier.discriminator("Composed", ComposedClassifierSchema);