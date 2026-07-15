import React, {
	useState,
	useRef,
	useEffect
} from "react";
import {
	View,
	StyleSheet,
	Pressable,
	Image,
	Platform,
	Animated
} from "react-native";

import CreatureInfoPanel from "./CreatureInfoPanel";
import {
	SpecificCreature
} from "@/types/creature";
import { CreatureCartDimensions } from "@/constants/carts";

type Props = {
	creatureDetail: SpecificCreature
	backgroundColor?: string
	width?: number
}

export default function CreatureDetailCard({
	creatureDetail,
	backgroundColor = "#1F1F1F",
	width,
}: Props) {

	const [expanded, setExpanded] = useState(false);

	const isWeb = Platform.OS === "web";

	const fadeAnim = useRef(new Animated.Value(0)).current;

	const handlePress = () => {
		if (!isWeb) {
			setExpanded((prev) => !prev);
		}
	};

	useEffect(() => {
		if(expanded) {
			Animated.timing(fadeAnim, {
				toValue: 0.85,
				duration: 300,
				useNativeDriver: true, 
			}).start();

		} else {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
			}
	},[expanded,fadeAnim])

	return (

		<View style = {[
				styles.container,
				width ? {
					width,
					aspectRatio: CreatureCartDimensions.aspectRadio
				} : {
					width: "100%",
					aspectRatio: CreatureCartDimensions.aspectRadio
				} 
			]} 
		>

			<Pressable 
				onPress = {handlePress}
				onHoverIn = {
					() => isWeb && setExpanded(true)
				}
				onHoverOut = {
					() => isWeb && setExpanded(false)
				}
				style = {styles.card}
			>

				<Image
					source = {
						creatureDetail.image.url || require("@/assets/images/Lucca_pj.jpeg")
					}
					//source={{ uri:creatureDetail.image.url }}
					alt = {
						creatureDetail.image.alt
					}
					style = {styles.image}
					resizeMode = "contain"
				/>

				<Animated.View style={[styles.overlay,{ opacity: fadeAnim }]}>
					<CreatureInfoPanel
						tier = {{
							form: creatureDetail.creature_tier.creature_form,
							power: creatureDetail.creature_tier.creature_color,
						}}
						stats = {creatureDetail.stats}
						backgroundColor = {backgroundColor}
					/>
				</Animated.View>
				

			</Pressable>
		
		</View>

	);

}

const CARD_MIN_WIDTH = 300;

const styles = StyleSheet.create({
	container: {

		//minWidth: CARD_MIN_WIDTH,
		//width: "100%",
   		//height: "100%",
	},
	card: {
		width: "90%",
		height: "90%",
		margin: "5%",
	},
	image: {
		height: "100%",
		width: "100%",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,

	}
});