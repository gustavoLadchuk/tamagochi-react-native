import { StyleSheet } from 'react-native'
import Colors from './Colors'
import tamagochiMain from '@/app/tamagochiMain'
import { Block, EmptyCell } from '@/components/TetrisTypes'
import Cell from '@/components/TetrisCell'

const tamagochiStyle = StyleSheet.create({
    createContainer: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        gap: 10
    },
    input: {
        height: 40,
        width: "70%",
        margin: 12,
        borderWidth: 2,
        padding: 5
    },
    petSelectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold"
    },
    petSelectionContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
    },
    petPreviewContainer: {
        borderStyle: "solid",
        borderWidth: 3,
        height: "50%",
        width: "100%",

    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 5
    },
    buttonView: {
        width: 150,
        height: 40
    },
    tamagochiMainContainer: {
        alignItems: "center",
        marginTop: 100,
    },
    tamagochiContainer: {
        height: 400,
        width: 250,
        backgroundColor: Colors.lavenderPurple,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    tamagochiStats: {

    },
    tamagochiSprite: {

    },
    roomContainer: {
        backgroundColor: "black",
        height: 460
    },
    petContainer: {
        width: 70,
        height: 70,
        borderStyle: "solid",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 7
    },
    petIcon: {
        width: 64,
        height: 64
    },
    statusContainer: {
        backgroundColor: "#B89B45",
        width: "100%",
        height: 100,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
    },
    MinigameButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    cardContainer: {
        marginTop: 50,
        backgroundColor: Colors.lavenderPurple,
        width: 180,
        height: 200,
        alignItems: 'center',
        gap: 50,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10
    },
    cardTextContainer: {
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    minigameCardText: {
        fontSize: 20,
        fontWeight: "bold",

    },
    CharacterText: {
        fontFamily: "Verdana",
        fontWeight: "bold",
    },
    CardText: {
        gap: 10
    },
    CardImage: {
        marginLeft: 20,
    },
    MinigameImage: {
        borderWidth: 4,
        borderColor: 'white',
        marginLeft: 10,
        width: 120,
        height: 120,
    },
    bigTamagochiSprite: {
        width: 300,
    },
    GameContainer: {
        backgroundColor: Colors.primaryYellow,
        flex: 1,
    },
    minigamePage: {
        flex: 1,
        backgroundColor: Colors.royalPurple,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 5
    }
})

export default tamagochiStyle