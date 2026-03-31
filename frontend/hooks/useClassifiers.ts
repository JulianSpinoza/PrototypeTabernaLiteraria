import { useState } from "react";
import { useAPIState } from "./useAPIState";
import { getClassifiers } from "@/services/api_endpoints";

export function useClassifiers<T>(inicial:T) {

    const [classifiers, setClassifiers] = useState<T>(inicial);
    const { loading, error, approvedOperation, startLoading, handleError } = useAPIState();

    async function fetchClassifier(category_slug:string) {

        startLoading();
        try {
            const classifiersFound = await getClassifiers(category_slug);
            setClassifiers(classifiersFound);
        } catch (err) {
          handleError(err);
        } finally {
          approvedOperation();
        }
        
    }

    return {
        classifier_loading: loading,
        classifier_error: error,
        classifiers,
        fetchClassifier
    }
}