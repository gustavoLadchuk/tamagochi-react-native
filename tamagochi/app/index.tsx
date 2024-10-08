import Colors from "@/assets/constants/Colors";
import CharacterCard from "@/components/GeneralComponents/CharacterCard";
import Header from "@/components/GeneralComponents/Header";
import LoadingScreen from "@/components/GeneralComponents/LoadingScreen";
import { tamagochi } from "@/components/Types/types";
import { useDatabase } from "@/hooks/useDatabase";
import { Ionicons } from "@expo/vector-icons";
import { Link, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { View, StyleSheet } from 'react-native';
import { FlatList } from "react-native";

/*################################################################################################*/

const index = () => {

    //Declaração dos useStates. 
    const [petList, setPetList] = useState<tamagochi[]>([])
    const [loading, setLoading] = useState(true)

    //integração da database na pagina inicial.
    const { getTamagochis, updateTamagochi } = useDatabase()

    const searchTamagochis = async () => {

        const oldPets = await getTamagochis() //pega o tamagochi desatualizado

        oldPets.forEach(async (item) => {
            updateTamagochi(item)//atualiza todos os tamagochis
        })

        const newPets = await getTamagochis()//pega os tamagochis atualizados

        setPetList(newPets)
        setLoading(false)
    }

    useFocusEffect(
        useCallback(() => {

            searchTamagochis()

            return () => {
                setLoading(true)
            }
        }, [])
    );


    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <View style={styles.pageView}>
            <Header title="Seus Tamagochis" color={Colors.darkYellow} />
            <View style={styles.buttonContainer}>

                <Link href={"/createTamagochi"}>
                    <Ionicons name="add-circle-outline" size={40} color="white" />
                </Link>

            </View>


            <FlatList
                data={petList}
                renderItem={({ item, index }) => {
                    return (
                        <CharacterCard
                            pet={item}
                            key={index}
                        />
                    )
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ height: 10 }} />
                    )
                }}
            />
        </View>
    );
}

/*################################################################################################*/
//StyleSheet
const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        alignItems: "center",
        gap: 10,
        backgroundColor: '#9966FF'
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 5
    },
    buttonView: {
        width: 150,
        height: 40,
        backgroundColor: Colors.softGreen,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 400,
        borderRadius: 10,
    },
    listContainer: {
        width: "100%",
        gap: 10,
        alignItems: "center"
    }
})

/*################################################################################################*/

export default index;