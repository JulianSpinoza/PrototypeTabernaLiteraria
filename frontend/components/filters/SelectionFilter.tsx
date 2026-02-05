import { FlatList, View, Image, Pressable, Text, StyleSheet } from "react-native";
import { TextFilter, TextFilterProps } from "./TextFilter";
import { useState } from "react";

type ItemList = {
    name: string;
    image?: any;
}

interface SelectionFilterProps extends TextFilterProps {
    listOfOptions: ItemList[];
};

export function SelectionFilter({value, placeholder, onChange, listOfOptions}:SelectionFilterProps) {

    const [options, setOptions] = useState<ItemList[]>(listOfOptions);
    const [selected, setSelected] = useState<ItemList>();

    const handleInputFilter = (searchValue:string) => {
        if(searchValue === "") {
            setOptions(listOfOptions);
        } else {
            const optionsFiltered = listOfOptions.filter((item) => item.name.includes(searchValue));
            setOptions(optionsFiltered);
        }
        onChange(searchValue);
        setSelected(undefined);
    }

    const handleSelect = (item:ItemList) => {
        setSelected(item);
        onChange(item.name);
    }

    return (
        <View style={styles.fullContainer}>
            <View>
                {selected && (
                    <Image
                        source= {{uri:selected.image}}
                    />
                )}
                <TextFilter 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={handleInputFilter}
                />
            </View>
            {options !== listOfOptions && selected === undefined &&(
                <View style= {styles.optionsContainer}>
                    <FlatList
                        key={"a"}
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

const styles = StyleSheet.create({
    fullContainer:{
        position:"relative",
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
        width: "30%", 
        aspectRatio: 1,
    }
});