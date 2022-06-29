import axios from "axios";

export const getShows = async ()=>{
const response = await axios.get('https://api.tvmaze.com/shows');
 return response.data
}

