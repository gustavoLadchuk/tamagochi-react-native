import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TamagochiSprite from '@/components/TamagochiSprite';
import Colors from '@/assets/constants/Colors';
import StatusInfo from '@/components/StatusInfo';
import { useEffect, useState } from 'react';
import InteractionButton from '@/components/InteractionButton';
import { Link, useFocusEffect, useLocalSearchParams } from 'expo-router';
import StatusHeader from '@/components/StatusHeader';
import PetInfo from '@/components/PetInfo';
import { useDatabase } from '@/hooks/useDatabase';
import { tamagochi } from '@/components/Types/types';
import { calculate } from '@/components/constants/statusCalculate';



const styles = StyleSheet.create({
    statusIcon: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderRadius: 5
    },
    statContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    },
    statusText: {
        fontWeight: "bold",
        fontSize: 18
    },
    roomContainer: {
        backgroundColor: "black",
        height: "78%"
    },
    statusContainer: {
        backgroundColor: Colors.darkYellow,
        width: "100%",
        height: 80,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
    },
    tamagochiContainer: {
        position: "absolute",
        right: 10,
        top: 20
    },
    interactionContainer: {
        width: "100%",
        height: 80,
        backgroundColor: Colors.darkYellow,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    petInfoContainer: {
        width: "100%",
        alignItems: "center"
    },
    petName: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    petStatus: {
        color: "white",
        fontSize: 20
    },
    background: {
        flex: 1
    },
    playButton: {
        height: 50,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "white",
        borderWidth: 5,
        backgroundColor: "#07cc00"
    },
    playButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    changeButton: {
        width: 50,
        height: 50,
        backgroundColor: "gray",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    lightOff: {
        position: "absolute",
        width: "100%",
        height: 600,
        top: 0
    },
})


function ChangeButton({ isLeftDirection, func, disabled }:
    { isLeftDirection: boolean, func: (isLeftDirection: boolean) => void, disabled: boolean }) {

    const handlePressButton = () => {
        func(isLeftDirection)
    }

    return (
        <Pressable onPress={handlePressButton} disabled={disabled}>
            <View style={styles.changeButton}>
                <MaterialCommunityIcons name={isLeftDirection ? "chevron-left" : "chevron-right"} size={30} color="black" />
            </View>
        </Pressable>

    )


}

const RoomContainer = ({ room, name, status, pet_id, isLightOff }:
    { room: number, name: string, status: string, pet_id: number, isLightOff: boolean }) => {



    const roomData = [
        {
            image: require('@/assets/images/sala.jpg'),
            petX: 30,
            petY: 25
        },
        {
            image: require('@/assets/images/cozinha.jpg'),
            petX: 30,
            petY: 150
        },
        {
            image: require('@/assets/images/quarto.jpg'),
            petX: 30,
            petY: 120
        },
    ]

    const petImages = [
        {
            normal: require('@/assets/images/coelho.png'),
            sleeping: require(('@/assets/images/coelho-dormindo.png'))
        },
        {
            normal: require('@/assets/images/rato.png'),
            sleeping: require(('@/assets/images/rato.png'))
        },
        {
            normal: require('@/assets/images/cobra.png'),
            sleeping: require(('@/assets/images/cobra-dormindo.png'))
        }
    ]

    return (
        <View style={styles.roomContainer}>
            <ImageBackground resizeMode='cover' style={styles.background} source={roomData[room].image}>

                <View style={{ position: "absolute", left: roomData[room].petX, top: roomData[room].petY }}>
                    <TamagochiSprite scale={6} TamagochiImage={isLightOff ? petImages[pet_id].sleeping : petImages[pet_id].normal} />
                </View>
                <View style={[styles.lightOff, { backgroundColor: `rgba(0, 0, 0, ${isLightOff ? 0.7 : 0})` }]} />
                <PetInfo name={name} status={status} />
            </ImageBackground>
        </View>
    )
}

export default function tamagochiDetails() {

    const { tamagochi: tamagochiId } = useLocalSearchParams()

    const { getTamagochiById, updateTamagochi } = useDatabase()

    const [pet, setPet] = useState<tamagochi>({
        "id": 0,
        "name": "",
        "pet_id": 0,
        "fun": 0,
        "sleep": 0,
        "hunger": 0,
        "is_sleeping": false,
        "last_update": ""
    })

    const [loading, setLoading] = useState(true)

    const [saving, setSaving] = useState(false)

    const [sleeping, setSleeping] = useState(false)

    const [room, setRoom] = useState(0)

    const updateAtributes = async (pet: tamagochi) => {
        await updateTamagochi(pet)
        console.log(pet)
    }

    const findTamagochi = async () => {
        const response: tamagochi = await getTamagochiById(Number(tamagochiId))
        setPet(response)

        if (response.is_sleeping) {
            setRoom(2)
            setSleeping(true)
        }

        setLoading(false)
    }

    useEffect(() => {
        findTamagochi()
    }, [])

    const changeRoom = (isLeftDirection: boolean) => {

        if (isLeftDirection && room === 0) return setRoom(2)

        if (!isLeftDirection && room === 2) return setRoom(0)

        setRoom(isLeftDirection ? room - 1 : room + 1)

        updateTamagochi(pet)

        console.log(pet)

    }

    const handleFeedButton = () => {

        setPet((pet) => ({
            ...pet,
            hunger: pet.hunger + 10 <= 100 ? pet.hunger + 10 : 100
        }))
        updateAtributes({ ...pet, hunger: pet.hunger + 10 })


    }

    const handleSleepButton = () => {
        setSaving(true)
        if (sleeping) {
            setSleeping(false)
            updateAtributes({ ...pet, is_sleeping: false })

        } else {
            setSleeping(true)
            updateAtributes({ ...pet, is_sleeping: true })
        }

        setSaving(false)
        console.log(sleeping)
    }

    if (loading) {
        return (
            <View>
                <Text>Carregando</Text>
            </View>
        )
    }


    return (
        <View >
            <StatusHeader hunger={pet.hunger} sleep={pet.sleep} fun={pet.fun} />

            <RoomContainer
                room={room}
                name={pet.name}
                status={calculate(pet.hunger + pet.fun + pet.sleep)}
                pet_id={pet.pet_id}
                isLightOff={sleeping}
            />



            <View style={styles.interactionContainer}>

                <ChangeButton
                    isLeftDirection={true}
                    func={changeRoom}
                    disabled={saving || sleeping}
                />

                <InteractionButton
                    id={pet.id}
                    room={room}
                    eatFunc={handleFeedButton}
                    sleepFunc={handleSleepButton}
                    disabled={saving}
                />

                <ChangeButton
                    isLeftDirection={false}
                    func={changeRoom}
                    disabled={saving || sleeping}
                />

            </View>

        </View >
    );
}
