import { createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){

        //console.log(state, ' ', action)
        return {
            min: 12,
            max: 30
        }
    },
    nomes: function(state, action){
        //console.log(state, ' ', action)
        return ['ana', 'bia', 'Carlos']
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig