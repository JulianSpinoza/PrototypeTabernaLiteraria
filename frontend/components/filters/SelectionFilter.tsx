import { FlatList, View, Image, Pressable, Text, StyleSheet } from "react-native";
import { TextFilter, TextFilterProps } from "./TextFilter";
import { useState } from "react";
import { ItemList, MultiItemList } from "@/types/filterTypes";

interface SelectionFilterProps extends TextFilterProps {
    llave: string;
    listOfOptions: ItemList[];
    onChangeSelected: (key:string,item:ItemList|undefined) => void;
}

export interface SingleSelectionFilterProps {
    llave: string;
    textInput: TextFilterProps;
    listOfOptions: ItemList[];
};

interface MultiSelectionFilterProps {
    filters: SingleSelectionFilterProps[];
    listOfResults: MultiItemList[];
    isFullImages?: boolean;
}

export function MultiSelectionFilter({filters,listOfResults,isFullImages}:MultiSelectionFilterProps) {

    const initializeState = () => {
        const initialState: Record<string,ItemList|undefined> = {};
        filters.map((filter)=>{
            initialState[filter.llave] = undefined;
        });
        return {
            image: undefined,
            items: initialState,
        } as MultiItemList;
    }
    
    const [finalSelection, setFinalSelection] = useState<MultiItemList>(initializeState)

    const handleSelection = (key:string,item:ItemList|undefined) => {

        setFinalSelection(prev => {

            const selection = {
                ...prev.items,
                [key]: item,
            } as Record<string, ItemList|undefined>;

            const filtersSelected = Object.values(selection).filter(
                item => item !== undefined
            ); 

            if(filtersSelected.length > 1){
                const results = listOfResults.filter(result => equalsObject(result.items,selection));
                if(results.length === 1){
                    return {
                        image: results[0].image,
                        items: selection,
                    }
                } else if (results.length > 1) {
                    throw Error("Existen duplicados en el Array de MultiItemList ingresados en el listOfResults");
                } else if (isFullImages) {
                    throw Error("No existe una posibilidad dentro del listOfResults ingresado, con el filtro presente");
                } else {
                    return {
                        image: undefined,
                        items: selection,
                    }
                }
            } else if (filtersSelected.length === 1) {
                return {
                    image: filtersSelected[0].image,
                    items: selection,
                };
            } else {
                return {
                    image: undefined,
                    items:selection,
                };
            }   
        });
    }
    
    return (
        <View style={styles.fullContainer}>
            <View style={styles.textFilterContainer}>
                {finalSelection && (
                    <Image
                        //source= {{uri:selected.image}}
                        source = {finalSelection.image}
                        style = {styles.image}
                        resizeMode="contain"
                    />
                )}
                {filters.map((filter) =>(
                    <SelectionFilter
                        key= {filter.llave}
                        llave={filter.llave}
                        value={filter.textInput.value}
                        placeholder={filter.textInput.placeholder}
                        onChange={filter.textInput.onChange}
                        listOfOptions={filter.listOfOptions}
                        onChangeSelected={handleSelection}
                    />
                ))}
                
            </View>
        </View>
    );
}

export function SingleSelectionFilter({llave, textInput, listOfOptions}:SingleSelectionFilterProps) {

    const [finalSelection, setFinalSelection] = useState<ItemList>()

    const handleFinalSelection = (key:string,item:ItemList|undefined) => {
        setFinalSelection(item);
    }

    return (
        <View style={styles.fullContainer}>
            <View style={styles.textFilterContainer}>
                {finalSelection && (
                    <Image
                        //source= {{uri:selected.image}}
                        source = {finalSelection.image}
                        style = {styles.image}
                        resizeMode="contain"
                    />
                )}
                <SelectionFilter
                    llave= {llave}
                    value={textInput.value}
                    placeholder={textInput.placeholder}
                    onChange={textInput.onChange}
                    listOfOptions={listOfOptions}
                    onChangeSelected={handleFinalSelection}
                />
            </View>
        </View>
    );
}

export function SelectionFilter({llave, value, placeholder, onChange, listOfOptions, onChangeSelected}:SelectionFilterProps){

    const [options, setOptions] = useState<ItemList[]>(listOfOptions);
    const [selected, setSelected] = useState(false);

    const handleInputFilter = (searchValue:string) => {
        if(searchValue === "") {
            setOptions(listOfOptions);
        } else {
            const optionsFiltered = listOfOptions.filter((item) => item.name.includes(searchValue));
            setOptions(optionsFiltered);
        }
        setSelected(false);
        onChange(searchValue);
        onChangeSelected(llave,undefined);
    }

    const handleSelect = (item:ItemList) => {
        setSelected(true);
        onChangeSelected(llave,item);
        onChange(item.name);
    }

    return (
        <View>
            <TextFilter 
                placeholder={placeholder} 
                value={value} 
                onChange={handleInputFilter}
            />
            {options !== listOfOptions && !selected &&(
                <View style= {styles.optionsContainer}>
                    <FlatList
                        key={`${placeholder} options`}
                        data= {options}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.cardsContainter}
                        renderItem={({ item }) => <ItemCard item={item} onPress={() => handleSelect(item)}/> }
                    />
                </View>
            )}
        </View>
    );
}

interface ItemCardProps {
    item: ItemList;
    onPress: () => void
};

function ItemCard({item, onPress}:ItemCardProps) {
    return (
        <Pressable style= {styles.itemCard} onPress={onPress}>
            {item.image && (
                <Image
                    source = {item.image}
                    style = {styles.image}
                    resizeMode="contain"
                />
            )}
            <Text style= {styles.input}>{item.name}</Text>
        </Pressable>
    );
}

function equalsObject(a: any, b: any): boolean {
    // Si son el mismo valor primitivo o la misma referencia
    if (a === b) return true;

    // Si alguno no es objeto o es null, ya sabemos que no son iguales
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!keysB.includes(key) || !equalsObject(a[key], b[key])) {
        return false;
        }
    }

    return true;
}

//Pasar a globales pues su Multi lo tiene tambien
const styles = StyleSheet.create({
    fullContainer:{
        position:"relative",
    },
    textFilterContainer:{
        flexDirection: "row",
    },
    optionsContainer: {
        position:"absolute",
        top: "100%",
        left: "7.5%",
        width: "85%",
        height: 200,
        paddingHorizontal: 20,
    },
    cardsContainter: {
        backgroundColor:"#532a1759",
    },
    itemCard: {
        borderRadius: 999,
        paddingVertical: 12,
        paddingHorizontal:7,
        backgroundColor: "#7a3f23",
        marginVertical:2,
        marginHorizontal: 5,
        flexDirection: "row",
        alignItems:"center"
    },
    input: {
        color: "#fff",
        marginHorizontal: "10%",
    },
    image: {
        height: "100%", 
        width: 40, 
        aspectRatio: 1,
    }
});