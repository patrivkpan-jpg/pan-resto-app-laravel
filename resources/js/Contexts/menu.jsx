import { createContext, useState } from "react";
import axios from 'axios';

const BASE_URL = 'http://restopan.com/api/menu';
const MenuContext = createContext();

function MenuContextProvider({ children }) {
    const [menu, setMenu] = useState([]);

    const getMenu = () => {
        // console.log('hello!')
        axios.get(BASE_URL)
            .then(function (response) {
                setMenu(response.data.result)
            }).catch(function (error) {
                console.log(error)
            })
    }

    // const addMenuItem = ({ name, description, price, image }) => {
    //     axios.post(BASE_URL, {
    //         name, description, price, image
    //     },{
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     }).then(function (response) {
    //         const updatedMenu = [
    //             ...menu,
    //             response.data.result
    //         ]
    //         setMenu(updatedMenu);
    //     }).catch(function (error) {
    //         console.log(error)
    //     })
    // }

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
        menu,
        getMenu,
        // addMenuItem,
        // editMenuItem,
        // deleteMenuItem
    }

    return (
        <MenuContext.Provider value={valueToShare}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContextProvider }
export default MenuContext;