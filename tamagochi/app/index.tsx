import Colors from "@/assets/constants/Colors";
import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { tamagochi } from "@/components/Types/types";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
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

    const getTamagochis = () => {
        const list: tamagochi[] = [
            {
                name: "Edivaldo",
                pet_id: 0,
                hunger: 50,
                sleep: 50,
                fun: 50,
                is_sleeping: false
            },
            {
                name: "Edivaldo",
                pet_id: 0,
                hunger: 50,
                sleep: 50,
                fun: 50,
                is_sleeping: false
            },
            {
                name: "Edivaldo",
                pet_id: 0,
                hunger: 0,
                sleep: 0,
                fun: 0,
                is_sleeping: false
            },
        ]

        setPetList(list)
    }

    useEffect(() => {
        getTamagochis()
    }, [])

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
                            name={item.name}
                            pet_id={item.pet_id}
                            hunger={item.hunger}
                            sleep={item.sleep}
                            fun={item.fun}
                            is_sleeping={item.is_sleeping}
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