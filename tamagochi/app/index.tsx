import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { Link } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
import tamagochiStyle from "@/assets/style";

const index = () => {

    return (
        <View>
            <Header title="Seus Tamagochis" color="slateblue" />
            <View style={tamagochiStyle.buttonContainer}>
                <View style={tamagochiStyle.buttonView}>
                    <Link href={"/createTamagochi"}>
                        <Button title="Novo Tamagochi" color={"#6A0D91"} />
                    </Link>
                </View>
            </View>
            <CharacterCard />
            <CharacterCard />
        </View>
    );
}

export default index;