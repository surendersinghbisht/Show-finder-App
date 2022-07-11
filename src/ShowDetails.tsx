import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showCastFetchAction, showDetailFetch } from "./actions";
import Actor from "./models/actors";
import { Show } from "./models/shows";
import { showEntitiesSelector, showLoadingSelector } from "./selectors";
import Spinner from "./Spinner";
import { State } from "./store";
import { withRouter, WithRouterProps } from "./withRouter";

type ShowDetailsProps={
    loading: boolean;
    show:Show;
    actors: Actor[];
    fetchShow: (id: number) => void;
    fetchShowCast: (id: number) => void;
} & WithRouterProps;

const ShowsList:FC<ShowDetailsProps>=({show, fetchShow, fetchShowCast, params, loading})=>{

    const id = +params.id
useEffect (() => {
        fetchShow(id);
        fetchShowCast(id);
}, []);


return(
    <>
   {loading && <Spinner />} {show && <div className=" p-8">
       <div className="bg-white p-4 rounded-md shadow-md space-y-2">
        <h1 className="font-bold">{show.name}</h1>
        <img className="w-20" src={
            show.image?.medium ||
 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
        } />
         <h1 className="font-bold"> Rating: <span className="font-semibold">{show.rating.average}/10</span></h1>
       <p> {show.summary}</p>
        </div>
   </div>
    }
   </>
);
}

const mapStateToProps = (s:State, props: WithRouterProps) => {
    const id = +props.params.id;
    return{
        show: showEntitiesSelector(s)[id],
loading: showLoadingSelector(s)[id],
};
};

const mapDispatchToProps = {
    fetchShow: showDetailFetch,
    fetchShowCast: showCastFetchAction,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList)));