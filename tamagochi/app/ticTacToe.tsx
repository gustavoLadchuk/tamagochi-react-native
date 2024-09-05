import Colors from "@/assets/constants/Colors";
import Header from "@/components/Header";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.softGreen,
        flex: 1
    },
    gameInfoContainer: {
        width: "100%",
        height: 100,
        backgroundColor: "lightyellow",
        borderWidth: 5,
        borderColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    turnText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    scoreContainer: {
        height: "100%",
        width: 100,
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    scoreText: {
        fontSize: 20
    },
    gameContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap"
    },
    slot: {
        width: 120,
        height: 120,
        backgroundColor: "lightyellow",
        borderWidth: 5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 0
    }
})

type score = {
    player: string,
    score: number
}

const ScoreDisplay = ({ player, score }: score) => {
    return (
        <View style={styles.scoreContainer}>
            <Text style={styles.turnText}>{player}</Text>
            <Text style={styles.scoreText}>{score}</Text>
        </View>
    )

}

const Slot = ({ mark }: { mark: string }) => {

    const handleClickSlot = () => { }

    return (
        <Pressable>
            <View style={styles.slot}>
                <Text>{mark}</Text>
            </View>
        </Pressable>

    )
}

const ticTacToe = () => {

    const [score, setScore] = useState<score[]>([
        {
            player: "X",
            score: 0
        },
        {
            player: "O",
            score: 0
        }
    ])

    const [slots, setSlots] = useState<string[]>(['X', 'X', 'X', 'X', 'X', '', '', '', ''])

    const [currentTurn, setCurrentTurn] = useState("X")

    return (
        <View style={styles.screen}>
            <Header color={Colors.deepPurple} title="Jogo da Velha" />
            <View style={styles.gameInfoContainer}>
                <ScoreDisplay player={score[0].player} score={score[0].score} />
                <View>
                    <Text style={styles.turnText}> Vez de X</Text>
                </View>
                <ScoreDisplay player={score[1].player} score={score[1].score} />
                <View>

                </View>
            </View>

            <View style={styles.gameContainer}>
                <View>
                    {slots.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <Slot mark={item} />
                            )
                        }
                    })}
                </View>
                <View>
                    {slots.map((item, index) => {
                        if (index > 2 && index <= 5) {
                            return (
                                <Slot mark={item} />
                            )
                        }
                    })}
                </View>
                <View>
                    {slots.map((item, index) => {
                        if (index > 5) {
                            return (
                                <Slot mark={item} />
                            )
                        }
                    })}
                </View>

            </View>

        </View>
    );
}

export default ticTacToe;