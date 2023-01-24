import {Reducer} from "redux";
import {
    Tasks,
    TASKS
} from "./action";

export type RootState = {
    author: string
}

const initialState: RootState = {
    author: 'Bakirov Ildar'
}

type MyAction = Tasks

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case TASKS:
            return {
                ...state
            }
        default:
            return state
    }
}
