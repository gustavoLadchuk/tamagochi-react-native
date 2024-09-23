import { Button, Pressable, StyleSheet, Text, View } from "react-native";

/*################################################################################################*/

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#202020'
    },
    gameOverText: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold"
    },
    restartButton: {
        backgroundColor: "green",
        padding: 10,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    restartButtonText: {
        color: "white",
        fontSize: 25
    }
})

/*################################################################################################*/

const GameOver = ({ restart }: { restart: () => void }) => {

    const handleRestart = () => {
        restart()
    }

    return (
        <View style={styles.gameOverScreen}>
            <Text style={styles.gameOverText}>Game Over</Text>
            <Pressable style={styles.restartButton} onPress={handleRestart}>
                <Text style={styles.restartButtonText}>Reiniciar</Text>
            </Pressable>
        </View>
    );
}

export default GameOver;

/*################################################################################################*/
