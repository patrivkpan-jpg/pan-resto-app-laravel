import { useContext } from "react";
import MenuContext from '../Contexts/menu';

function useMenuContext() {
    return useContext(MenuContext)
}

export default useMenuContext;