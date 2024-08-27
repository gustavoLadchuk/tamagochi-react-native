import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, ImageSourcePropType, Linking, StyleSheet, Text, View } from "react-native";
import StatusCalculation from "./StatusCalculation";
import { Link, Redirect } from "expo-router";
import tamagochiStyle from '@/assets/constants/style';

type CharacterCardProps = {
    PetImage: ImageSourcePropType,
    Name:string,
    Status:number,
}

const CharacterCard = ({PetImage, Name,Status}: CharacterCardProps) => {
    
    return (
        <View style={tamagochiStyle.cardContainer}>
            <View style={tamagochiStyle.CardImage}>
               <Image source={PetImage}/>
            </View>
           
        <View style={tamagochiStyle.CardText}>
           <Text>
                {Name}
            </Text>
              
            <Text>
                Atributes
            </Text>

            <Text>
                Status:  <StatusCalculation status={Status}/>
            </Text>
                <Link href={'/tamagochiMain'}>
                <Button title="Selecionar"></Button>
                </Link>
           </View>
        </View>
    );


}

export default CharacterCard;