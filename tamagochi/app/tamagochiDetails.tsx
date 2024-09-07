import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TamagochiSprite from '@/components/TamagochiSprite';
import Colors from '@/assets/constants/Colors';
import StatusInfo from '@/components/StatusInfo';
import { useEffect, useState } from 'react';
import InteractionButton from '@/components/InteractionButton';
import { Link } from 'expo-router';
import StatusHeader from '@/components/StatusHeader';
import PetInfo from '@/components/PetInfo';



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
    }
})


type tamagochiAtributes = {
    hunger: number,
    sleep: number,
    fun: number
}

function ChangeButton({ isLeftDirection, func }:
    { isLeftDirection: boolean, func: (isLeftDirection: boolean) => void }) {

    const handlePressButton = () => {
        func(isLeftDirection)
    }

    return (
        <Pressable onPress={handlePressButton}>
            <View style={styles.changeButton}>
                <MaterialCommunityIcons name={isLeftDirection ? "chevron-left" : "chevron-right"} size={30} color="black" />
            </View>
        </Pressable>

    )


}

const RoomContainer = ({ room }: { room: number }) => {

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

    return (
        <View style={styles.roomContainer}>
            <ImageBackground resizeMode='cover' style={styles.background} source={roomData[room].image}>
                <PetInfo name='Edivaldo' status={"Feliz"} />
                <View style={{ position: "absolute", left: roomData[room].petX, top: roomData[room].petY }}>
                    <TamagochiSprite scale={6} TamagochiImage={require('@/assets/images/coelho.png')} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default function tamagochiDetails() {

    const [atributes, setAtributes] = useState<tamagochiAtributes>({
        hunger: 50,
        sleep: 50,
        fun: 50
    })

    const [room, setRoom] = useState(0)

    const [lastUpdate, setLastUpdate] = useState<number>()

    const updateAtributes = () => {
        setLastUpdate(Date.now)
    }

    useEffect(() => {
        updateAtributes()
    }, [])

    const changeRoom = (isLeftDirection: boolean) => {

        if (isLeftDirection && room === 0) return setRoom(2)

        if (!isLeftDirection && room === 2) return setRoom(0)

        setRoom(isLeftDirection ? room - 1 : room + 1)


    }

    return (
        <View >
            <StatusHeader hunger={atributes.hunger} sleep={atributes.sleep} fun={atributes.fun} />

            <RoomContainer room={room} />

            <View style={styles.interactionContainer}>

                <ChangeButton isLeftDirection={true} func={changeRoom} />

                <Link href={"/jogos"}>
                    <View style={styles.playButton}>
                        <Text style={styles.playButtonText}>Brincar</Text>
                    </View>
                </Link>

                <ChangeButton isLeftDirection={false} func={changeRoom} />

            </View>

        </View >
    );
}
