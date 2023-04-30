
import { createStore } from "redux";
const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case '@counter/incremented' :
            return state + 1;
        case '@counter/incremented' :
            return state - 1;  
        case '@counter/reseted' :
            return 0; 
        default: 
            new Error('this action is not supported');         
    }
}

const store = createStore(counterReducer);

const actionIncremented = {
    type: '@counter/incremented'
}
const actionDecremented = {
    type: '@counter/decremented'
}
const actionReset = {
    type: '@counter/reseted'
}

store.suscribe(() =>{
    console.log(store.getState());
})
store.dispatch(actionIncremented);
store.dispatch(actionDecremented);
store.dispatch(actionReset);
