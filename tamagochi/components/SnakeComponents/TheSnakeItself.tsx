import { Fragment } from "react"
import { coordinate } from "../Types/types"
import { StyleSheet, View } from "react-native"
import Colors from "@/assets/constants/Colors"

/*################################################################################################*/

interface snakeProps {
    snake: coordinate[],

}

/*################################################################################################*/


export default function Snake ({snake}: snakeProps): JSX.Element {
    // a classe Fragment, agrupa elementos sem precisar de um wrapper (Uma View).
    //a cobra é um agrupamento enorme de views.
    return (
        <Fragment> 
            {snake.map((segment: coordinate,index:number) => {
                const segmentStyle = {
                    left: segment.x * 10,
                    top: segment.y * 10,
                };
                return <View key={index} style={[styles.snake, segmentStyle]}/>
            } )}
        </Fragment>
    )
}

/*################################################################################################*/

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        backgroundColor: "#368154",
        position: 'absolute',
        borderRadius: 12,
    }
})

/*################################################################################################*/
