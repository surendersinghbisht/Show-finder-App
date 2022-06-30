import { FC, memo } from "react";
import { Show } from "./models/shows";

type ShowsRowProps={
show: Show
}

const ShowsRow:FC<ShowsRowProps>=({show})=>{

return(

<div className=" bg-gray-200 flex flex-col space-y-2 p-4" >
       <div className="bg-white p-4 rounded-md shadow-md space-y-2">
        <h1 className="font-bold">{show.name}</h1>
        <img className="w-20" src={
            show.image?.medium ||
 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
        } />
       <p> {show.summary}</p>
        </div>
        </div>

);
}

export default memo(ShowsRow);