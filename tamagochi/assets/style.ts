import { StyleSheet } from 'react-native'
import ColorsStyle from "./constants"
import tamagochiMain from '@/app/tamagochiMain'
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
        backgroundColor: ColorsStyle.lavenderPurple,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    tamagochiStats: {
       
    },
    tamagochiSprite: {
        
    }
})

export default tamagochiStyle