import { useSQLiteContext } from "expo-sqlite";

export function useDatabase() {
    const database = useSQLiteContext();

    async function create({nome} : {nome: string}){
        const Query = await database.prepareAsync(`
            INSERT INTO pet VALUES ($nome);
            `)
        try{
            await Query.executeAsync({nome});
        }catch(error){
            console.log(error);
        }finally{
            await Query.finalizeAsync();
        }
    }
}