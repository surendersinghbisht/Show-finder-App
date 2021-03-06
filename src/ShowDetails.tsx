import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  showCastFetchAction,
  showDetailFetch,
  showsfetchAction,
} from "./actions";
import LinkWithQuery from "./LinkWithQuery";
import Actor from "./models/actors";
import { Show } from "./models/shows";
import {
  showActorsLoadingSelector,
  showActorsSelector,
  showEntitiesSelector,
  showLoadingSelector,
  showsSelector,
} from "./selectors";
import Spinner from "./Spinner";
import { State } from "./store";
import { withRouter, WithRouterProps } from "./withRouter";

type ShowDetailsProps = {
  loading: boolean;
  show: Show;
  actors: Actor[];
  fetchShow: (id: number) => void;
  fetchShowCast: (id: number) => void;
  fetchShows: (q: string) => void;
  actorsLoding: boolean;
  prev?: string;
  next?: string;
} & WithRouterProps;

const ShowsList: FC<ShowDetailsProps> = ({
  show,
  fetchShow,
  fetchShows,
  fetchShowCast,
  params,
  loading,
  actors,
  actorsLoding,
  search,
  prev,
  next,
}) => {
  useEffect(() => {
    const id = +params.id;
    const query = search.get("q");
    if (!show && query) {
      fetchShows(query);
    }
    fetchShow(id);
    fetchShowCast(id);
  }, [params]);

  return (
    <>
      {loading && <Spinner></Spinner>}
      {show && (
        <div className=" p-8">
          <div className="flex justify-between font-bold text-red-400 text-xl p-4 hover:text-red-300">
            {prev ? (
              <LinkWithQuery to={prev}> &#60; Prev </LinkWithQuery>
            ) : (
              <span></span>
            )}
            {next ? (
              <LinkWithQuery to={next}>Next &#62;</LinkWithQuery>
            ) : (
              <span></span>
            )}
          </div>
          <div className="bg-white p-4 rounded-md shadow-md space-y-2">
            <h1 className="font-bold ">{show.name}</h1>
            <img
              className="w-20"
              src={
                show.image?.medium ||
                "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
            />
            <h1 className="font-bold">
              {" "}
              Rating:{" "}
              <span className="font-semibold">{show.rating.average}/10</span>
            </h1>
            <p> {show.summary}</p>
            {actorsLoding && (
              <div className="m-20 p-12">
                <Spinner></Spinner>
              </div>
            )}
            {actors && (
              <div className="flex flex-wrap ">
                <h1 className="font-bold ">Actors:</h1>
                {actors.map((a) => (
                  <div key={a.id}>
                    <div className="m-8 p-4">
                      {a.name}
                      <div className=" h-40 w-40">
                        <img src={a.image?.medium} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (s: State, props: WithRouterProps) => {
  const id = +props.params.id;

  const shows = showsSelector(s);

  let prevShow, nextShow;

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    if (show.id === id) {
      if (i + 1 < shows.length) {
        nextShow = shows[i + 1];
      }

      if (i >= 1) {
        prevShow = shows[i - 1];
      }

      break;
    }
  }

  return {
    show: showEntitiesSelector(s)[id],
    loading: showLoadingSelector(s)[id],
    actors: showActorsSelector(s)[id],
    actorsLoding: showActorsLoadingSelector(s)[id],
    prev: prevShow && `/shows/${prevShow.id}`,
    next: nextShow && `/shows/${nextShow.id}`,
  };
};

const mapDispatchToProps = {
  fetchShow: showDetailFetch,
  fetchShowCast: showCastFetchAction,
  fetchShows: showsfetchAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList))
);
