import Colors from "@/assets/constants/Colors";
import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { tamagochi } from "@/components/Types/types";
import { useDatabase } from "@/hooks/useDatabase";
import { Link, useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { FlatList } from "react-native";


const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        alignItems: "center",
        gap: 10
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
        borderRadius: 10
    },
    listContainer: {
        width: "100%",
        gap: 10,
        alignItems: "center"
    }
})

const index = () => {

    const [petList, setPetList] = useState<tamagochi[]>([])

    const [loading, setLoading] = useState(true)

    const { getTamagochis, updateTamagochi } = useDatabase()

    const searchTamagochis = async () => {

        const response = await getTamagochis()

        setPetList(response)
    }

    const updateAllTamagochis = () => {

        petList.forEach(async (item) => {
            updateTamagochi(item)
        })
        setLoading(false)

    }

    useFocusEffect(
        useCallback(() => {
            searchTamagochis()

            if (loading) {
                setTimeout(() => {
                    updateAllTamagochis()

                }, 500)

            }
            return () => {
                setLoading(true)
            }
        }, [])
    );

    if (loading) {
        return (
            <View>
                <Text>Carregando</Text>
            </View>
        )
    }

    return (
        <View style={styles.pageView}>
            <Header title="Seus Tamagochis" color="slateblue" />
            <View style={styles.buttonContainer}>

                <Link href={"/createTamagochi"}>
                    <View style={styles.buttonView}>
                        <Text>Novo Tamagochi</Text>
                    </View>
                </Link>

            </View>


            <FlatList
                data={petList}
                renderItem={({ item, index }) => {
                    return (
                        <CharacterCard
                            id={item.id}
                            name={item.name}
                            hunger={item.hunger}
                            sleep={item.sleep}
                            fun={item.fun}
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

export default index;