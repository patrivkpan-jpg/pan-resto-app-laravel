import { useState } from 'react';
import useMenuContext from '../../Hooks/use-menu-context';

function MenuItemAdd() {

    const { addMenuItem } = useMenuContext();

    return (
        <div className='add-menu-item'>
            <button className='add-menu-item-btn'>
                <span>Add Item</span>
            </button>
        </div>
    )
}

export default MenuItemAdd;