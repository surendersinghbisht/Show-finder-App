import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsfetchAction } from "./actions";
import { Show } from "./models/shows";
import {
  mainLoadingSelector,
  showQuerySelector,
  showsSelector,
} from "./selectors";
import ShowsRow from "./ShowsRow";
import Spinner from "./Spinner";
import { State } from "./store";

type ShowsListProps = {
  shows: Show[];
  fetchShows: (query: string) => void;
  query: string;
  mainLoading: boolean;
};

const ShowsList: FC<ShowsListProps> = ({
  query,
  shows,
  fetchShows,
  mainLoading,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };

  return (
    <div className="p-4 shadow-md">
      <input
        onChange={handleChange}
        value={query}
        className="w-80 h-10 shadow-md border-2 border-blue-200 bg-gray-100 rounded-md m-2"
        placeholder="search"
      />
      {mainLoading && <Spinner></Spinner>}
      {shows.map((s) => (
        <ShowsRow query={query} show={s} key={s.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (s: State) => ({
  shows: showsSelector(s),
  query: showQuerySelector(s),
  mainLoading: mainLoadingSelector(s),
});

const mapDispatchToProps = {
  fetchShows: showsfetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList));
