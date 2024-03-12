import { useContext } from "react";
import ImageContext from '../Contexts/image';

function useImageContext() {
    return useContext(ImageContext)
}

export default useImageContext;