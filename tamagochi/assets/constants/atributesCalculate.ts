export function calculateAtributes(hunger: number, sleep: number, fun: number, is_sleeping: boolean, last_update: string) {
    const now = new Date()

    const formatedLastUpdate = new Date(last_update.replace(" ", "T"))

    const diferencaMilissegundos = now.getTime() + (now.getTimezoneOffset() * 1000 * 60) - formatedLastUpdate.getTime();
    const amount = Math.floor(diferencaMilissegundos / (1000 * 60 * 60));

    let newHunger: number
    let newSleep: number
    let newFun: number

    newHunger = hunger - amount

    if (newHunger > 100) newHunger = 100
    if (newHunger < 0) newHunger = 0

    if (is_sleeping) {
        newSleep = sleep + amount * 10 <= 100 ? sleep + amount * 10 : 100
    } else {
        newSleep = sleep - amount >= 0 ? sleep - amount : 0
    }

    newFun = fun - amount

    if (newFun > 100) newFun = 100
    if (newFun < 0) newFun = 0

    return { newHunger, newSleep, newFun }
}