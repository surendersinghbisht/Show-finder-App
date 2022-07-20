import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const LinkWithQuery:FC<any> = ({children, to, ...props})=> {
    const {search} = useLocation();
  return <div>

<Link to={ to + search} {...props}>
    {children}
</Link>
  </div>;
}

export default LinkWithQuery;
