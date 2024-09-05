export function calculate(status: number) {
    if (status < 1) {
        return "Morto"
    } if (status >= 1 && status <= 50) {
        return "Critíco"
    } if (status >= 51 && status <= 100) {
        return "Muito Triste"
    } if (status >= 101 && status <= 150) {
        return "Triste"
    } if (status >= 151 && status <= 200) {
        return "Ok"
    } if (status >= 201 && status <= 250) {
        return "Bem"
    } if (status >= 252 && status <= 300) {
        return "Muito Bem"
    }

}