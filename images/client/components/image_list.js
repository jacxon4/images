/**
 * Created by jacxon4 on 07/09/2016.
 */

// Import React
import React from 'react';
import ImageDetail from './image_detail';

// Create our component JSX
const ImageList = (props) =>{
    const validImages = props.images.filter(image => !image.is_album);
    const RenderedImages = validImages.map( (image) =>
        // This is how to add props this results as a <props>.picture
        <ImageDetail key={image.title} image = {image}/>
    );
    return(
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

// Export our component
export default ImageList;