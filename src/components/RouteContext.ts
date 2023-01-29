import { createContext } from "react";

export interface RouteStateType {
    offset:number;
    setOffset:Function;
}

export default createContext<RouteStateType>({
  offset: 0,
  setOffset: () => {},
});