import React from "react";
import { CellOptions } from "./TetrisTypes";
import { View } from "react-native";
import tamagochiStyle from "@/assets/constants/style";

interface Props {
    type: CellOptions
}

const dynamicStyle = {
    ...styles.baseStyle,
    ...(type === )
}

function Cell({type}: CellOptions){
    return <View style={tamagochiStyle.`${type}`}></View>
}

export default Cell