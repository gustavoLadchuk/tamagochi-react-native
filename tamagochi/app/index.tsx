import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { tamagochi } from "@/components/Types/types";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";


const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        alignItems: "center"
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 5
    },
    buttonView: {
        width: 150,
        height: 40
    },
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
                <View style={styles.buttonView}>
                    <Link href={"/createTamagochi"}>
                        <Button title="Novo Tamagochi" color={"#6A0D91"} />
                    </Link>
                </View>
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
            />
        </View>
    );
}

export default index;