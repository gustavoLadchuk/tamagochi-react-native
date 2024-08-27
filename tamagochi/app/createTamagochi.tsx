import Header from "@/components/Header";
import { Button, StyleSheet, Text, TextInput, View, Image, Pressable, ImageSourcePropType } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    petContainer: {
        width: 70,
        height: 70,
        borderStyle: "solid",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 7
    },
    input: {
        height: 40,
        width: "70%",
        margin: 12,
        borderWidth: 2,
        padding: 5
    },
    petIcon: {
        width: 64,
        height: 64
    },
    createContainer: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        gap: 10
    },
    petSelectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold"
    },
    petSelectionContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
    },
    petPreviewContainer: {
        borderStyle: "solid",
        borderWidth: 3,
        height: "50%",
        width: "100%",

    },
    bigTamagochiSprite: {
        width: 300,
    },
})

type pet = {
    iconImg: ImageSourcePropType
    isSelected: boolean
}

const petList: pet[] =
    [{
        iconImg: require(`@/assets/images/hamster.png`),
        isSelected: true
    },
    {
        iconImg: require(`@/assets/images/mouse.png`),
        isSelected: false
    },
    {
        iconImg: require(`@/assets/images/rabbit.png`),
        isSelected: false
    }]



const SelectPet = ({ iconImg, isSelected }: pet) => {

    const handleSelectPet = () => {

    }

    return (

        <Pressable>
            <View style={styles.petContainer}>
                <Image style={styles.petIcon} source={iconImg} />
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
        <View style={styles.createContainer}>
            <Header title="Novo Tamagochi" color="green" />
            <TextInput
                placeholder="Nome do bixinho"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.petSelectionTitle}>
                Selecione seu bixinho:
            </Text>
            <View style={styles.petSelectionContainer}>
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
            <View style={styles.petPreviewContainer}>
                <Image style={styles.bigTamagochiSprite} source={require('@/assets/images/reptileSprite.png')} />
            </View>
            <View>
                <Button title="Criar Tamagochi" onPress={handleCreateTamagochi} />
            </View>
        </View>
    );
}

export default createTamagochi;