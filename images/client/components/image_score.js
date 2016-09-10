/**
 * Created by jacxon4 on 10/09/2016.
 */
import React from 'react';

const  ImageScore = (props) =>{
    //props.ups is the number of upvotes
    //props.downs is the number of downvotes

    //Destructuring ES6
    const  {ups,downs} = props;
    // The same as const ups = props.ups;
    //The same as  const downs = props.downs;

    // Template string from ES6
    const  upsPercent = `${100 * (ups/(ups+downs))}%`;
    const  downsPercent = `${100 * (downs/(ups+downs))}%`;



    return(
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{width: upsPercent}} className="progress-bar progress-bar-success progress-bar-striped"></div>
                <div style={{width: downsPercent}} className="progress-bar progress-bar-danger progress-bar-success"></div>
            </div>
        </div>
    )

};

export default ImageScore;