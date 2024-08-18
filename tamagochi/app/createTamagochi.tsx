import Header from "@/components/Header";
import SelectPet from "@/components/SelectPet";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import tamagochiStyle from '../assets/style'


const styles = StyleSheet.create({
    
})

const createTamagochi = () => {
    return (
        <View style={tamagochiStyle.createContainer}>
            <Header title="Novo Tamagochi" color="green"/>
            <TextInput
                placeholder="Nome do bixinho"
                style={tamagochiStyle.input}
            />
            <Text style={tamagochiStyle.petSelectionTitle}>
                Selecione seu bixinho:
            </Text>
            <View style={tamagochiStyle.petSelectionContainer}>
                <SelectPet />
                <SelectPet />
                <SelectPet />
            </View>
            <View style={tamagochiStyle.petPreviewContainer}>

            </View>
            <View>
                <Button title="Criar Tamagochi" />
            </View>
        </View>
    );
}

export default createTamagochi;