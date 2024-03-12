import './bootstrap';

import ReactDOM from 'react-dom/client';        
import App from './App';
import { MenuContextProvider } from './Contexts/menu';
import { ImageContextProvider } from './Contexts/image';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ImageContextProvider>
        <MenuContextProvider>
                <App />
        </MenuContextProvider>
    </ImageContextProvider>
);