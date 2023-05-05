import { Actions, AppState, AuthActions, ShapeActions,  } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                user: {
                    userName: "",
                    email: ""
                }
            }
            
        case ShapeActions.ADD:
            return {
                ...currentState,
                shape: [
                    payload,
                    ...currentState.shape,
                ]
            }
        
        case ShapeActions.GET:
            return {
                ...currentState,
                shape: payload
            }

    
        default:
            return currentState;
    }
}
