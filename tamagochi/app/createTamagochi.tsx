import Header from "@/components/Header";
import { Button, StyleSheet, Text, TextInput, View, Image, Pressable, ImageSourcePropType } from "react-native";
import tamagochiStyle from '../assets/style'
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

type pet = {
    iconImg: ImageSourcePropType
    isSelected: boolean
}

const petList: pet[] =
    [{
        iconImg: require(`@/assets/images/hapi.jpg`),
        isSelected: true
    },
    {
        iconImg: require(`@/assets/images/sad.jpg`),
        isSelected: false
    },
    {
        iconImg: require(`@/assets/images/neutral.jpg`),
        isSelected: false
    }]



const SelectPet = ({ iconImg, isSelected }: pet) => {

    const handleSelectPet = () => {

    }

    return (

        <Pressable>
            <View style={tamagochiStyle.petContainer}>
                <Image style={tamagochiStyle.petIcon} source={iconImg} />
            </View>
        </Pressable>
    );
}

const createTamagochi = () => {

    const [name, setName] = useState("")

    const [pets, setPets] = useState<pet[]>(petList)

    const handleCreateTamagochi = () => {
        console.log(name)
    }

    return (
        <View style={tamagochiStyle.createContainer}>
            <Header title="Novo Tamagochi" color="green" />
            <TextInput
                placeholder="Nome do bixinho"
                style={tamagochiStyle.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={tamagochiStyle.petSelectionTitle}>
                Selecione seu bixinho:
            </Text>
            <View style={tamagochiStyle.petSelectionContainer}>
                <FlatList
                    horizontal={true}
                    data={pets}
                    extraData={pets}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item, index }) =>
                        <SelectPet iconImg={item.iconImg} isSelected={item.isSelected} />
                    }
                />
            </View>
            <View style={tamagochiStyle.petPreviewContainer}>
                <Image style={tamagochiStyle.bigTamagochiSprite} source={require('@/assets/images/reptileSprite.png')} />
            </View>
            <View>
                <Button title="Criar Tamagochi" onPress={handleCreateTamagochi} />
            </View>
        </View>
    );
}

export default createTamagochi;