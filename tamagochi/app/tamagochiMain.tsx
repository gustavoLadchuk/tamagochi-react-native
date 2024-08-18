import React from "react";
import { Text, View } from "react-native";
import tamagochiStyle from "@/assets/style";
import StatusCalculation from "@/components/StatusCalculation";
const tamagochiMain = () => {    
    let fome:number = 10, 
    diversao:number = 10, 
    sono:number = 10

    return (
        <View style={tamagochiStyle.tamagochiMainContainer}>
            <Text>
                Status: 
                <Text>
                    <StatusCalculation fome={fome} sono={sono} diversao={diversao}/>
                </Text> 
            </Text>
            <View style={tamagochiStyle.tamagochiContainer}>
                <View style={tamagochiStyle.tamagochiStats}>
                    sono: 
                </View>
                <View style={tamagochiStyle.tamagochiSprite}>
                    tamagochi :3
                </View>
            </View>
        </View>
    );
}

export default tamagochiMain