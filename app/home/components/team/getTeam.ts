import supabase from "@/app/core/supabaseConnection";
import { cache } from "react";

export default async function getTeam(){
    console.log("start");
    const {data} = await supabase.from("Team").select();
    console.log(data, "end");
    return data
}