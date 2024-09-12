import { Button, StyleSheet, Text, View } from "react-native";

/*################################################################################################*/

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    restartButton: {
        width: 200,
        height: 100,
        backgroundColor: "green"
    },
})

/*################################################################################################*/

const GameOver = ({ restart }: { restart: () => void }) => {

    const handleRestart = () => {
        restart()
    }

    return (
        <View style={styles.gameOverScreen}>
            <Text>Game Over</Text>
            <Button onPress={handleRestart} title='Reiniciar' />
        </View>
    );
}

export default GameOver;

/*################################################################################################*/
