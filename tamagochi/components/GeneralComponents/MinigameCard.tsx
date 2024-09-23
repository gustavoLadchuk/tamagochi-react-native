import React from "react"
import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'
import { Link } from "expo-router"
import Colors from "@/assets/constants/Colors"

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 50,
        backgroundColor: Colors.lavenderPurple,
        width: 180,
        height: 200,
        alignItems: 'center',
        gap: 50,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10
    },

    MinigameImage: {
        borderWidth: 4,
        borderColor: 'white',
        marginLeft: 10,
        width: 120,
        height: 120,
    },
    cardTextContainer: {
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    minigameCardText: {
        fontSize: 20,
        fontWeight: "bold",

    },
})

type props = {
    imagemini: ImageSourcePropType,
    name: string
    path: games,
    id: number
}

type games = | "Snake" | "carStreet"

const MinigameCard = ({ imagemini, name, path, id }: props) => {
    return (
        <Link href={`/${path}?id=${id}`}>
            <View style={styles.cardContainer}>
                <View>
                    <Image style={styles.MinigameImage} source={imagemini} />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.minigameCardText}>{name}</Text>
                    </View>

                </View>
            </View>
        </Link>
    )
}

export default MinigameCard