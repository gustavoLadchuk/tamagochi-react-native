import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { Link } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        marginTop: 5
    },
    buttonView: {
        width: 150,
        height: 40
    }
})

const index = () => {

    return (
        <View>
            <Header title="Seus Tamagochis" color="slateblue" />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Link href={"/createTamagochi"}>
                        <Button title="Novo Tamagochi" color={"#08c935"} />
                    </Link>
                </View>
            </View>
            <CharacterCard />
            <CharacterCard />

        </View>
    );
}

export default index;