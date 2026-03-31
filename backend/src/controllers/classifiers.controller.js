import { Classifier } from "../models/Classifier.js";

export const getClassifiers = async (req, res) => {
    try {
        const category_slug  = req.params.category_slug;

        const filter = {};

        filter["category.slug"] = category_slug;

        const classifiers = await Classifier.find(filter);

        res.json(classifiers);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener clasificadores con categoria: " + category_slug });
    }
}