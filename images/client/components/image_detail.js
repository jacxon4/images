/**
 * Created by jacxon4 on 07/09/2016.
 */

import React from 'react';

const ImageDetail = (props) => {
//props.picture => image object because we called like that on props
    return(
        <li className="media list-group-item">
            <div className="media-left">
            <img src={props.picture.link}/>
                </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.picture.title}
                </h4>
            </div>
        </li>
    );

};

export default ImageDetail;