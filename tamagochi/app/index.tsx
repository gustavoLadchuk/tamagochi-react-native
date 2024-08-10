import CharacterCard from "@/components/CharacterCard";
import ListHeader from "@/components/ListHeader";
import React from "react";
import {View, Text} from 'react-native';

const index = () => {
    
    return (
       <View>
        <ListHeader/>
        <CharacterCard/>
        <CharacterCard/>

       </View> 
    );
}

export default index;