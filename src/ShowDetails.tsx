import { FC, memo } from "react";
import { connect } from "react-redux";
import { Show } from "./models/shows";
import { showEntitiesSelector } from "./selectors";
import { State } from "./store";
import { withRouter, WithRouterProps } from "./withRouter";

type ShowDetailsProps={
    show:Show;
} & WithRouterProps

const ShowsList:FC<ShowDetailsProps>=({show})=>{

return(
<div className=" p-8">
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

const mapStateToProps = (s:State, props: WithRouterProps) => ({
show: showEntitiesSelector(s)[+props.params.id]
})


export default withRouter(connect(mapStateToProps)(memo(ShowsList)));