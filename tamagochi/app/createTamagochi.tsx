import Header from "@/components/GeneralComponents/Header";
import { Button, StyleSheet, Text, TextInput, View, Image, Pressable, ImageSourcePropType, ImageBackground, ScrollView } from "react-native";
import { useState } from "react";
import TamagochiSprite from "@/components/TamagochiComponents/TamagochiSprite";
import { useDatabase } from "@/hooks/useDatabase";
import { router } from "expo-router";

/*################################################################################################*/

type pet = {
    iconImg: ImageSourcePropType
    sprite: ImageSourcePropType
}

/*################################################################################################*/

const avaiblePetsList: pet[] =
    [{
        iconImg: require(`@/assets/images/rabbit.png`),
        sprite: require('@/assets/images/coelho.png'),
    },
    {
        iconImg: require(`@/assets/images/mouse.png`),
        sprite: require('@/assets/images/rato.png'),
    },
    {
        iconImg: require(`@/assets/images/reptile.png`),
        sprite: require('@/assets/images/cobra.png'),
    }]

/*################################################################################################*/

const SelectPet = ({ index, iconImg, isSelected, onPress }: {
    index: number,
    iconImg: ImageSourcePropType,
    isSelected: boolean,
    onPress: (index: number) => void
}) => {

    const handleSelectPet = () => {
        onPress(index)
    }

    return (

        <Pressable onPress={handleSelectPet}>
            <View style={[styles.petContainer, { borderColor: isSelected ? "lightgreen" : "black" }]}>
                <Image style={styles.petIcon} source={iconImg} />
            </View>
        </Pressable>
    );
}

/*################################################################################################*/

const createTamagochi = () => {

    const [name, setName] = useState("")

    const [selectedPet, setSelectedPet] = useState(0)

    const { newTamagochi } = useDatabase()

    const handleSelectTamagochi = (index: number) => {
        setSelectedPet(index)
    }

    const handleCreateTamagochi = async () => {
        try {
            await newTamagochi({ name: name, pet_id: selectedPet })
            router.replace("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <ScrollView style={{ height: 750 }}>
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

                    {avaiblePetsList.map((item, index) => {
                        return (
                            <SelectPet
                                index={index}
                                iconImg={item.iconImg}
                                isSelected={selectedPet == index}
                                onPress={handleSelectTamagochi}
                                key={index}
                            />
                        )
                    })}
                </View>
                <View style={styles.petPreviewContainer}>
                    <ImageBackground source={require('@/assets/images/sala.jpg')} style={styles.petPreviewBackground} resizeMode="cover">
                        <View style={styles.tamagochiContainer}>
                            <TamagochiSprite scale={5} TamagochiImage={avaiblePetsList[selectedPet].sprite} />
                        </View>
                    </ImageBackground>

                </View>
                <View>
                    <Button title="Criar Tamagochi" onPress={handleCreateTamagochi} disabled={!name} />
                </View>
            </View>
        </ScrollView>
    );
}

/*################################################################################################*/

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
        height: 64,
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
        height: 400,
        width: "100%",
        overflow: "hidden"
    },
    petPreviewBackground: {
        width: "100%",
        height: "100%"
    },
    tamagochiContainer: {
        position: "absolute",
        left: 40,
        bottom: 30
    }
})

/*################################################################################################*/

export default createTamagochi;