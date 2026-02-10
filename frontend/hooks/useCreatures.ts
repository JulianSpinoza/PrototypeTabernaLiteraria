import { useState } from "react";
import { useAPIState } from "./useAPIState";
import { getCreatures, getOneCreature } from "@/services/api_endpoints";
import { CreatureWideFilter } from "@/types/creature";
import { toStringSearchParams } from "@/services/api_translation";

export function useCreatures<T>() {

    const [creatures, setCreatures] = useState<T|null>(null);
    const { loading, error, approvedOperation, startLoading, handleError } =
      useAPIState();

    async function fetchCreatures(query:CreatureWideFilter) {

        startLoading();
        try{
            const searchParams = toStringSearchParams(query);
            const creaturesAvaliable = await getCreatures(searchParams);
            setCreatures(creaturesAvaliable);
        } catch (err) {
            handleError(err);
        } finally {
            approvedOperation();
        }
    }

    async function fetchOneCreature() {
        
        startLoading();
        try {
          const creaturesAvaliable = await getOneCreature();
          setCreatures(creaturesAvaliable);
          console.log(creaturesAvaliable);
        } catch (err) {
          handleError(err);
        } finally {
          approvedOperation();
        }
    }

    return {
        loading,
        error,
        creatures,
        fetchCreatures,
        fetchOneCreature
    };

}