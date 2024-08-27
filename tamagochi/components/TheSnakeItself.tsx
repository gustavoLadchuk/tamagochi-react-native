import { Fragment } from "react"
import { coordinate } from "./Types/types"
import { StyleSheet, View } from "react-native"
import tamagochiStyle from "@/assets/constants/style"
import Colors from "@/assets/constants/Colors"
interface snakeProps {
    snake: coordinate[],

}
export default function Snake ({snake}: snakeProps): JSX.Element {
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

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        backgroundColor: Colors.lavenderPurple,
        position: 'absolute'
    }
})