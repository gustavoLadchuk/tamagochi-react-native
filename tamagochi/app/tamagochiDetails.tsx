import { Pressable, StyleSheet, View } from 'react-native';
import Colors from '@/assets/constants/Colors';
import { useCallback, useState } from 'react';
import InteractionButton from '@/components/InteractionButton';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import StatusHeader from '@/components/StatusHeader';
import { useDatabase } from '@/hooks/useDatabase';
import { changeButtonDirection, tamagochi } from '@/components/Types/types';
import ChangeButton from '@/components/ChangeButton';
import { RoomContainer } from '@/components/RoomContainer';
import LoadingScreen from '@/components/LoadingScreen';

/*################################################################################################*/

export default function tamagochiDetails() {


    //UseStates
    const [loading, setLoading] = useState(true)
    const [room, setRoom] = useState(0)
    const [isShowingDetails, setIsShowingDetails] = useState(false)
    const [pet, setPet] = useState<tamagochi>({
        "id": 0,
        "name": "",
        "pet_id": 0,
        "fun": 0,
        "sleep": 0,
        "hunger": 0,
        "is_sleeping": false,
        "last_update": ""
    });

    //Hooks
    const params = useLocalSearchParams()
    const { getTamagochiById, updateTamagochi } = useDatabase()

    useFocusEffect(
        useCallback(() => {
            findTamagochi()

            return () => {
                setLoading(true)
            }
        }, [])
    );


    //Functions
    const updateAtributes = async (pet: tamagochi) => {
        await updateTamagochi(pet)
    }

    const findTamagochi = async () => {
        const response: tamagochi = await getTamagochiById(Number(params.id))

        setPet({ ...response, is_sleeping: Boolean(response.is_sleeping) })

        if (response.is_sleeping) {
            setRoom(2)
        }

        setLoading(false)
    }


    const changeRoom = (direction: changeButtonDirection) => {

        let newRoom = room

        if (direction == "left") newRoom = newRoom - 1
        if (direction == "right") newRoom = newRoom + 1

        if (newRoom < 0) newRoom = 2
        if (newRoom > 2) newRoom = 0

        setRoom(newRoom)


    }

    const handleFeedButton = () => {

        let newHunger = pet.hunger + 10
        if (newHunger > 100) newHunger = 100

        setPet((pet) => ({
            ...pet,
            hunger: newHunger
        }))
        updateAtributes({ ...pet, hunger: newHunger })

    }

    const handleSleepButton = () => {

        updateAtributes({ ...pet, is_sleeping: !pet.is_sleeping })
        setPet({ ...pet, is_sleeping: !pet.is_sleeping })

    }

    const changeShowingDetails = () => {
        setIsShowingDetails(!isShowingDetails)
    }

    //Screen
    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <View >
            <Pressable onPress={changeShowingDetails}>
                <StatusHeader pet={pet} />
            </Pressable>


            <RoomContainer
                room={room}
                pet={pet}
                isShowingDetails={isShowingDetails}
                isLightOff={pet.is_sleeping}
            />

            <View style={styles.interactionContainer}>

                <ChangeButton
                    direction={"left"}
                    func={changeRoom}
                    disabled={pet.is_sleeping}

                />

                <InteractionButton
                    id={pet.id}
                    room={room}
                    eatFunc={handleFeedButton}
                    sleepFunc={handleSleepButton}
                    isLightsOff={pet.is_sleeping}
                />

                <ChangeButton
                    direction={"right"}
                    func={changeRoom}
                    disabled={pet.is_sleeping}
                />

            </View>

        </View >
    );
}

/*################################################################################################*/

//Stylesheet

export const styles = StyleSheet.create({
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

    playButton: {
        height: 50,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "white",
        borderWidth: 5,
        backgroundColor: "#07cc00",
    },
    playButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },


})

/*################################################################################################*/



