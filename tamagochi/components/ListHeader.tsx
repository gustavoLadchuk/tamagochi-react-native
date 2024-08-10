import React from "react";
import {ScrollView, StyleSheet, Text, View} from 'react-native'


const style = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: 'slateblue',
        padding: 20,
        alignItems: "center",
    },
    HeaderText: {
        fontFamily: "Verdana",
        fontWeight: "bold",
        color: "white"
    }
})
const ListHeader = () => {
    return (
        <View style={style.HeaderContainer}>
            <Text style={style.HeaderText}>Character Selection</Text>
        </View>
    );
}

export default ListHeader;