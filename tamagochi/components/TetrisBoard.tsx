import React from "react";
import {View,Text} from 'react-native'
import { BoardShape } from "./TetrisTypes";
import tamagochiStyle from "@/assets/constants/style";

interface Props {
    currentBoard: BoardShape
}

function Board({currentBoard}: Props){
    return(
        <View>
            {currentBoard.map((row, rowIndex) => (
                <View style={tamagochiStyle.row} key={`${rowIndex}`}>
                  {row.map((cell, colIndex) => (
                    <Cell key={`${rowIndex}-${colIndex}`} type={cell}/>
                  ))}
                  </View>  
            ))}
        </View>
    )
}