/**
 * Created by jacxon4 on 10/09/2016.
 */

import React from 'react';
import ReactDom from 'react-dom';


const App = ()=>{
    return(
        <div>Hello there!</div>
    );
};

Meteor.startup(() => {
    //React render call
    ReactDom.render(<App/>, document.querySelector('.container'));
});