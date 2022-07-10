import axios from "axios";
import { Show } from "./models/shows";

export const getShows = async (query: string)=>{
const response = await axios.get<{show:Show}[]>(' https://api.tvmaze.com/search/shows?q=' + query
);
 return response.data.map((d)=>d.show);
}

export const getDetails = async (id: number)=>{
    const response = await axios.get('https://api.tvmaze.com/episodes/' + id)
    return response.data;
}