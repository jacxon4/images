/**
 * Created by jacxon4 on 07/09/2016.
 */

import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
//props.picture => image object because we called like that on props
    return(
        <li className="media list-group-item">
            <div className="media-left">
            <img src={props.image.link}/>
                </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
                <p>{props.image.description}</p>
                <ImageScore ups={props.image.ups} downs = {props.image.downs}/>
            </div>
        </li>
    );

};

export default ImageDetail;