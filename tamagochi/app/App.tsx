import React from "react";
import {View,Text, StatusBar, TextInput} from 'react-native';
import * as SQLite from 'expo-sqlite'
import { useState, useEffect } from "react";
const App = () => {
    const db = SQLite.openDatabaseSync('example.db');
    const [isLoading, setLoading] = useState<Boolean>(true);
    const [names, setNames] = useState<string[]>([]);
    const [currentName, setCurrentName] = useState<string>('');

    if(!isLoading){
        return (<View>
            <Text>Loading Database...</Text>
        </View>
        )
    }

    return (
        <View>
            <TextInput value={currentName} placeholder="name" onChangeText={setCurrentName} />
            <StatusBar/>
        </View>
    )
}

export default App