import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "./models/shows";

type ShowsRowProps = {
  show: Show;
  query: string;
};

const ShowsRow: FC<ShowsRowProps> = ({ show, query }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/shows/${show.id}?q=${query}`);
  return (
    <div
      onClick={handleClick}
      className=" bg-gray-200 flex flex-col space-y-2 p-4 cursor-pointer"
    >
      <div className="bg-white p-4 rounded-md shadow-md space-y-2">
        <h1 className="font-bold">{show.name}</h1>
        <img
          className="w-20"
          src={
            show.image?.medium ||
            "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
        />
        <p> {show.summary}</p>
      </div>
    </div>
  );
};

export default memo(ShowsRow);
