import { calculateAtributes } from "@/assets/constants/atributesCalculate";
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
            await Query.finalizeAsync()
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

    async function updateTamagochi({ hunger, sleep, fun, is_sleeping, id, last_update }:
        { hunger: number, sleep: number, fun: number, is_sleeping: boolean, id: number, last_update: string }) {

        const { newHunger, newSleep, newFun } = calculateAtributes(hunger, sleep, fun, is_sleeping, last_update)

        const Query = await database.prepareAsync(`
            UPDATE pet SET hunger = $hunger, sleep = $sleep, fun = $fun, is_sleeping = $is_sleeping, last_update = CURRENT_TIMESTAMP WHERE id = $id
            `)
        try {
            await Query.executeAsync({ $hunger: newHunger, $sleep: newSleep, $fun: newFun, $is_sleeping: is_sleeping, $id: id });
        } catch (error) {
            console.log(error);
        } finally {
            await Query.finalizeAsync()
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
            await Query.finalizeAsync();
        }

    }


    return { newTamagochi, getTamagochis, getTamagochiById, updateTamagochi, deleteTamagochi }
}