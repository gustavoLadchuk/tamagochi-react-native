import React from "react";
import { Text } from "react-native";
type props = {
    fome: number,
    diversao: number,
    sono: number
}

const StatusCalculation: React.FC<props> = ({fome,diversao,sono}: props) => {


    let status:number = fome + diversao + sono;
    let message = ""
    if(status >= 1 && status <= 50){
        message = "Critíco"
    }if(status >= 51 && status <= 100){
        message = "Muito Triste"
    }if(status >= 101 && status <= 150){
        message = "Triste"
    }if(status >= 151 && status <= 200){
        message = "Ok"
    }if(status >= 201 && status <= 250){
        message = "Bem"
    }if(status >= 252 && status <= 300){
        message = "Muito Bem"
    }

    return (
        <Text>
            {message}
        </Text>
    )
}

export default StatusCalculation