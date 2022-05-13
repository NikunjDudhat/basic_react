import React from 'react';

function Loading(component) {

    return function LoadingAnyComponent ({isLoading, data}){
        if(isLoading){
            return(
                <h1>Loading...</h1>
            )
        }else{
            return(
                component({data})
            )
        }
    }
    
}

export default Loading;