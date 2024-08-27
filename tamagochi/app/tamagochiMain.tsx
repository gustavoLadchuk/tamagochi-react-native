import React from "react";
import { Link } from "expo-router";
import { Text, View, Image, Button, Pressable } from "react-native";
import tamagochiStyle from "@/assets/constants/style";
import TamagochiSprite from "@/components/TamagochiSprite";
import { Href, Redirect } from "expo-router";


const tamagochiMain = () => {

    return (
        <View>
            <TamagochiSprite TamagochiImage={require('@/assets/images/Hams1.png')} />


        </View>
    );
}

export default tamagochiMain