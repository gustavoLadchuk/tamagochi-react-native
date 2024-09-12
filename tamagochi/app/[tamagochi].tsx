import { ActivityIndicator, StyleSheet,View } from 'react-native';
import Colors from '@/assets/constants/Colors';
import { useEffect, useState } from 'react';
import InteractionButton from '@/components/InteractionButton';
import { useLocalSearchParams } from 'expo-router';
import StatusHeader from '@/components/StatusHeader';
import { useDatabase } from '@/hooks/useDatabase';
import { tamagochi } from '@/components/Types/types';
import { calculate } from '@/components/constants/statusCalculate';
import ChangeButton from '@/components/ChangeButton';
import { RoomContainer } from '@/components/RoomContainer';

/*################################################################################################*/

export default function tamagochiDetails() {


    //UseStates
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [sleeping, setSleeping] = useState(false)
    const [room, setRoom] = useState(0)
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
    const { tamagochi: tamagochiId } = useLocalSearchParams()
    const { getTamagochiById, updateTamagochi } = useDatabase()
    useEffect(() => {
        findTamagochi()
    }, [])

    const updateAtributes = async (pet: tamagochi) => {
        await updateTamagochi(pet)
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

  
    const changeRoom = (isLeftDirection: boolean) => {

        if (isLeftDirection && room === 0) return setRoom(2)

        if (!isLeftDirection && room === 2) return setRoom(0)

        setRoom(isLeftDirection ? room - 1 : room + 1)

        updateTamagochi(pet)

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
    }

    if (loading) {
        return (
            <View style={{alignItems: "center",
                justifyContent: "center",
                alignSelf: 'center',
                marginTop: 400,}}>
            <ActivityIndicator color={Colors.deepPurple}/>
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

/*################################################################################################*/

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
        backgroundColor: "#07cc00",
    },
    playButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    changeButton: {
        width: 50,
        height: 50,
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

/*################################################################################################*/



