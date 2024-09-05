import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function App() {
    const [gyroscopeData, setGyroscopeData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [position, setPosition] = useState(0)

    useEffect(() => {
        // Subscribing to gyroscope updates
        const subscription = Gyroscope.addListener((data) => {
            setGyroscopeData(data);
        });

        // Optionally, adjust the update interval
        Gyroscope.setUpdateInterval(16); // 1 segundo

        // Cleanup the subscription on unmount
        return () => subscription.remove();
    }, []);

    useEffect(() => {
        const speed = 5
        const movement = -gyroscopeData.z * speed
        const max = 100
        if (position + movement > -max && position + movement < max) {
            setPosition(position + movement)
        }

    }, [gyroscopeData.z])

    return (
        <View style={styles.container}>
            <View style={styles.road}>
                <Image source={require("@/assets/images/carro.png")} style={[styles.car, { left: (position) }]} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green"
    },
    text: {
        fontSize: 18,
    },
    car: {
        width: 150,
        height: 150
    },
    road: {
        backgroundColor: "black",
        height: "100%",
        width: "80%",
        alignItems: "center",
        justifyContent: "flex-end"
    }
});
