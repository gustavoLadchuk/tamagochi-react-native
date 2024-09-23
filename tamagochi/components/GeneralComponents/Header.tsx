import React from "react";
import { StyleSheet, Text, View } from 'react-native'

/*################################################################################################*/

type headerProps = {
    title: string,
    color: string,
}

/*################################################################################################*/

const Header = ({ title, color}: headerProps) => {
    return (
        <View style={[style.HeaderContainer, { backgroundColor: color, }]}>
            <Text style={style.HeaderText}>{title}</Text>
        </View>
    );
}

/*################################################################################################*/

const style = StyleSheet.create({
    HeaderContainer: {
        width: "100%",
        padding: 20,
        alignItems: "center",
    },
    HeaderText: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 25,
    },
})
export default Header;