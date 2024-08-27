import Header from "@/components/Header";
import SelectPet from "@/components/SelectPet";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import tamagochiStyle from '../assets/constants/style'
import Colors from "@/assets/constants/Colors";


const createTamagochi = () => {
    let headerCollor = Colors.deepPurple
    return (
        <View style={tamagochiStyle.createContainer}>
            <Header title="Novo Tamagochi" color={headerCollor}/>
            <TextInput
                placeholder="Nome do bixinho"
                style={tamagochiStyle.input}
            />
            <Text style={tamagochiStyle.petSelectionTitle}>
                Selecione seu bixinho:
            </Text>
            <View style={tamagochiStyle.petSelectionContainer}>
                <SelectPet petImage={require('@/assets/images/rabbit.png')}/>
                <SelectPet petImage={require('@/assets/images/mouse.png')}/>
                <SelectPet petImage={require('@/assets/images/reptile.png')}/>
            </View>
            <View style={tamagochiStyle.petPreviewContainer}>
                <Image style={tamagochiStyle.bigTamagochiSprite} source={require('@/assets/images/reptileSprite.png')}/>
            </View>
            <View>
                <Button title="Criar Tamagochi" />
            </View>
        </View>
    );
}

export default createTamagochi;