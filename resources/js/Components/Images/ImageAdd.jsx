import { useState } from 'react';
import useImageContext from '../../Hooks/use-image-context'

function ImageAdd() {
    
    const [image, setImage] = useState(null);

    const { addImage } = useImageContext();

    const onImageInputChange = (event) => {
        setImage(event.target.files[0])
        addImage({
            image
        })
        setImage(null)
    }

    return (
        <div className='add-image'>
                <label for='add-image-input' className='add-image-label'>
                    <span>Add Image</span>
                    <input id='add-image-input' type='file' onChange={onImageInputChange} accept="image/*"></input>
                </label>
        </div>
    )
}

export default ImageAdd;