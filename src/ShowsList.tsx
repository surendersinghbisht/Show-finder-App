import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsfetchAction } from "./actions";
import { showsSelector } from "./selectors";
import { State } from "./store";

type ShowsListProps={
    shows: any[],
    fetchShows: () =>void;
}

const ShowsList:FC<ShowsListProps>=({shows, fetchShows})=>{

    useEffect(()=>{
        fetchShows();
    },[]);

return(
<div>
    {shows.map(s=><div key={s.id}>
        {s.name}
        </div>)
    }
</div>
);
}

const mapStateToProps = (s: State) =>
({
    shows: showsSelector(s)
})

const mapDispatchToProps ={
    fetchShows: showsfetchAction,
}


export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList));