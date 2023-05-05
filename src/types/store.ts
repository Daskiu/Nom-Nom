import { DataShape } from "./data"

export type Observer = ({ render: () => void } & HTMLElement);

export interface AppState {
  shape: DataShape[];
  user: { 
    userName:string, 
    email: string,
  }
}

export enum AuthActions {
  "LOGIN" = "LOGIN",
  "LOGOUT" = "LOGOUT",
}

export enum ShapeActions {
  "ADD" = "ADD",
  "GET" = "GET",
}

export interface LogInAction {
  action: AuthActions.LOGIN,
  payload: Pick<AppState, "user">
}

export interface LogOutAction {
  action: AuthActions.LOGOUT,
  payload: void
}

export interface AddShapeAction {
  action: ShapeActions.ADD,
  payload: DataShape
}

export interface GetShapeAction {
  action: ShapeActions.GET,
  payload: DataShape[]
}

export type Actions = LogInAction | LogOutAction | AddShapeAction | GetShapeAction;