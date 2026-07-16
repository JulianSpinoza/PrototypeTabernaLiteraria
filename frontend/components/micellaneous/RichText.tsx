import { Text } from "react-native";

const PopupText = ({children}) => {

}

interface RichTextContent {
    text:string,
    definition: {
        title: string,
        description: string | RichTextContent,
    }
}

interface RichTextProps {
    content: RichTextContent[],
}

export default function RichText({content}:RichTextProps){

    return (
        <Text>

        </Text>
    );

}