import { Children, FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "./models/shows";

type SpinnerProps={
children: string;
}

const Spinner:FC<SpinnerProps> = ({children}) => {

return(

<div >
    <div className="flex items-center justify-center">
  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span className="visually-hidden">{children}</span>
  </div>
</div>
</div>

);
}

export default memo(Spinner);