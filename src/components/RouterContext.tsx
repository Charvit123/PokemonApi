import { useState } from "react";
import RouteContext from "./RouteContext";

interface RoutePropInterface {
  children: React.ReactElement;
}

const RouterContextProvider = (props: RoutePropInterface) => {
  const [offset, setOffset] = useState(0);

  return (
    <RouteContext.Provider value={{ offset, setOffset }}>
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouterContextProvider;
