/**
 * Created by Crespo on 04/09/2016.
 */

export default function ( {dispatch} ) {
    return next => action => {

        if( ! action.payload || ! action.payload.then ){
            return next(action);
        }

        action.payload
            .then( ( response ) =>{
                const newAction = { ...action, payload:response.data};
                dispatch( newAction );
            } );

        next(action);
    }
}


