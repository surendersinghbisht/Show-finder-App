import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsfetchAction } from "./actions";
import { Show } from "./models/shows";
import { showQuerySelector, showsSelector } from "./selectors";
import ShowsRow from "./ShowsRow";
import { State } from "./store";


type ShowsListProps={
    shows: Show[];
    fetchShows: (query:string) =>void;
    query: string;
}

const ShowsList:FC<ShowsListProps>=({query, shows, fetchShows})=>{

    const handleChange =(event: ChangeEvent<HTMLInputElement>) => {
        fetchShows(event.target.value);
  }

return(
<div className="p-4">
    <input onChange={handleChange} value={query}
    className="w-80 shadow-md border-2 border-blue-100 m-2"
     placeholder="search"/>
    {shows.map(s=>
      <ShowsRow show={s} key={s.id}/>  )
    }
</div>
);
}


const mapStateToProps = (s: State) =>
({
    shows: showsSelector(s),
    query: showQuerySelector(s),
})


const mapDispatchToProps = {
 fetchShows: showsfetchAction,  
}


export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList));