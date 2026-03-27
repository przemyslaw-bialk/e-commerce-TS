"use client";
import { Provider } from "react-redux";
import store from "./store";

type Prop = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: Prop) {
  return <Provider store={store}>{children}</Provider>;
}
