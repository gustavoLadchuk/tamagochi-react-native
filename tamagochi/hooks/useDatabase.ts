import { useSQLiteContext } from "expo-sqlite";

export function useDatabase() {
    const database = useSQLiteContext();

    async function newTamagochi({ name, pet_id }: { name: string, pet_id: number }) {
        const Query = await database.prepareAsync(`
            INSERT INTO pet (name, pet_id) VALUES ($name, $pet_id);
            `)
        try {
            await Query.executeAsync({ $name: name, $pet_id: pet_id });
        } catch (error) {
            console.log(error);
        } finally {
            await Query.finalizeAsync().catch((error) => { console.log(error) });
        }

    }

    async function getTamagochis() {
        const response = await database.getAllAsync<any>(`SELECT * FROM pet`)
        return response
    }

    async function getTamagochiById(id: number) {
        const response = await database.getFirstAsync<any>(`SELECT * FROM pet WHERE id = ${id}`)
        return response
    }

    function calculateTime(last_update: string) {
        const now = new Date()

        const formatedLastUpdate = new Date(last_update.replace(" ", "T"))

        const diferencaMilissegundos = now.getTime() + (now.getTimezoneOffset() * 1000 * 60) - formatedLastUpdate.getTime();
        const amount = Math.floor(diferencaMilissegundos / (1000 * 60 * 60));

        return amount
    }

    async function updateTamagochi({ hunger, sleep, fun, is_sleeping, id, last_update }:
        { hunger: number, sleep: number, fun: number, is_sleeping: boolean, id: number, last_update: string }) {

        const amount = calculateTime(last_update)

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

        const Query = await database.prepareAsync(`
            UPDATE pet SET hunger = $hunger, sleep = $sleep, fun = $fun, is_sleeping = $is_sleeping, last_update = CURRENT_TIMESTAMP WHERE id = $id
            `)
        try {
            await Query.executeAsync({ $hunger: newHunger, $sleep: newSleep, $fun: newFun, $is_sleeping: is_sleeping, $id: id });
        } catch (error) {
            console.log(error);
        } finally {
            await Query.finalizeAsync().catch((error) => { console.log(error) });
        }

    }

    async function deleteTamagochi({ id }: { id: number }) {
        const Query = await database.prepareAsync(`
            DELETE FROM pet WHERE id = $id
            `)
        try {
            await Query.executeAsync({ $id: id });
        } catch (error) {
            console.log(error);
        } finally {
            await Query.finalizeAsync().catch((error) => { console.log(error) });
        }

    }


    return { newTamagochi, getTamagochis, getTamagochiById, updateTamagochi, deleteTamagochi }
}