import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StatusCalculation from "./StatusCalculation";
const style = StyleSheet.create({
    cardContainer: {
        marginTop: 50,
        backgroundColor: '#FADA5E',
        height: 140,
        flexDirection: "row",
        alignItems: 'center',
        gap: 50,
        borderWidth: 3,
    },
    CharacterText: {
        fontFamily: "Verdana",
        fontWeight: "bold",
    },
    CardText: {
        gap: 20
    },
    CardImage: {
        marginLeft: 20,
    }
})
const CharacterCard = () => {
    let fome:number = 40
    let diversao:number = 40
    let sono:number = 100
    return (
        <View style={style.cardContainer}>
            <View style={style.CardImage}>
                <Text>
                    Image
                </Text>
            </View>
           
        <View style={style.CardText}>
           <Text>
                Name
            </Text>
              
            <Text>
                Atributes
            </Text>

            <Text>
                <StatusCalculation fome={fome} diversao={diversao} sono={sono}/>
            </Text>

           </View>
        </View>        
    );
}

export default CharacterCard;