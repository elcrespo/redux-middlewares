/**
 * Created by Crespo on 04/09/2016.
 */
import{
    FETCH_USERS
} from '../actions/types'

export default function ( state = [], action ) {

    switch ( action.type ){
        case FETCH_USERS :
            return [ ...state, ...action.payload ];
        break;
    }

    return state;

}