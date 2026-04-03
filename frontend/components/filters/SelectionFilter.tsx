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
}

export function MultiSelectionFilter({filters,listOfResults}:MultiSelectionFilterProps) {

    const initializeState = () => {
        const initialState: Record<string,string> = {};
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
                [key]: item?.slug,
            } as Record<string, string>;

            const filtersSelected = Object.values(selection).filter(
                item => item !== undefined
            ); 

            if(filtersSelected.length > 1){
                const results = listOfResults.find(result => equalsObject(result.items,selection));
                if(results){
                    return {
                        image: results.image,
                        items: selection,
                    }
                } else {
                    return {
                        image: undefined,
                        items: selection,
                    }
                }
            } else if (filtersSelected.length === 1) {
                return {
                    image: item?.image,
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
                        source = {finalSelection.image?.url}
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
                        source = {finalSelection.image.url}
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
            const searchNormalized = searchValue
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
            const optionsFiltered = listOfOptions.filter((item) => {
                const itemNormalized = item.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

                return itemNormalized.includes(searchNormalized);
                
            });
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
                    source = {item.image.url}
                    style = {styles.image}
                    resizeMode="contain"
                />
            )}
            <Text style= {styles.option}>{item.name}</Text>
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
        marginHorizontal:20,
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
    option: {
        color: "#fff",
        marginHorizontal: "10%",
    },
    image: {
        height: "100%", 
        width: 40, 
        aspectRatio: 1,
    }
});