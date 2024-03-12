import { createContext, useState } from "react";
import axios from 'axios';

const BASE_URL = 'http://restopan.com/api/image';
const ImageContext = createContext();

function ImageContextProvider({ children }) {
    const [images, setImages] = useState([]);

    const getImages = () => {
        axios.get(BASE_URL)
            .then(function (response) {
                setImages(response.data.result)
            }).catch(function (error) {
                console.log(error)
            })
    }

    const addImage = ({ image }) => {
        axios.post(BASE_URL, {
            image
        },{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            const updatedImages = [
                ...images,
                response.data.result
            ]
            setImages(updatedImages);
        }).catch(function (error) {
            console.log(error)
        })
    }

    // const editMenuItem = (_id, { description, price }) => {
    //     axios.put(BASE_URL, {
    //         _id, description, price,
    //     }).then(function (response) {
    //         const updatedMenu = menu.map((item) => {
    //             if (item._id === _id) {
    //                 return response.data.result
    //             }
    //             return item;
    //         })
    //         setMenu(updatedMenu);
    //     }).catch(function (error) {
    //         console.log(error)
    //     })
    // }

    // const deleteMenuItem = (_id) => {
    //     axios.delete(`${BASE_URL}/${_id}`)
    //     .then(function (response) {
    //         const updatedMenu = menu.filter((item) => {
    //             return item._id !== _id;
    //         })
    //         setMenu(updatedMenu);
    //     }).catch(function (error) {
    //             console.log(error)
    //         })
    // }

    const valueToShare = {
        images,
        getImages,
        addImage,
        // editMenuItem,
        // deleteMenuItem
    }

    return (
        <ImageContext.Provider value={valueToShare}>
            {children}
        </ImageContext.Provider>
    )
}

export { ImageContextProvider }
export default ImageContext;