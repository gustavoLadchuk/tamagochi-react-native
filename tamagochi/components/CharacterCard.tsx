import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const style = StyleSheet.create({
    cardContainer: {
        marginTop: 50,
        backgroundColor: 'red',
        height: 140,
        flexDirection: "row",
        alignItems: 'center',
        gap: 50,
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
    let CharacterStatus:number = 2
    let CharacterTextStatus:string = '0'

    const [status, setStatus] = useState<string>('');
    useEffect(() => {
        if(CharacterStatus >= 1 && CharacterStatus <= 50){
            CharacterTextStatus = "Critíco"
        }if(CharacterStatus >= 51 && CharacterStatus <= 100){
            CharacterTextStatus = "Muito Triste"
        }if(CharacterStatus >= 101 && CharacterStatus <= 150){
            CharacterTextStatus = "Triste"
        }if(CharacterStatus >= 151 && CharacterStatus <= 200){
            CharacterTextStatus = "Ok"
        }if(CharacterStatus >= 201 && CharacterStatus <= 250){
            CharacterTextStatus = "Bem"
        }if(CharacterStatus >= 252 && CharacterStatus <= 300){
            CharacterTextStatus = "Muito Bem"
        }
        setStatus(CharacterTextStatus);
    }, [CharacterStatus])
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
                {status}
            </Text>

           </View>
        </View>        
    );
}

export default CharacterCard;