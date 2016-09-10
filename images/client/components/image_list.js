/**
 * Created by jacxon4 on 07/09/2016.
 */

// Import React
import React from 'react';
import ImageDetail from './image_detail';



const IMAGES = [
    {title: 'Pen', link:'http://dummyimage.com/600x400'},
    {title: 'Pine Tree',link:'http://dummyimage.com/600x400'},
    {title: 'Mug',link:'http://dummyimage.com/600x400'}
];

// Create our component JSX
const ImageList = () =>{
    const RenderedImages = IMAGES.map( (image) =>
        // This is how to add props this results as a <props>.picture
        <ImageDetail key={image.title} picture = {image}/>
    );
    return(
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

// Export our component
export default ImageList;