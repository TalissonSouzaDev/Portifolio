import {createBrowserRouter} from 'react-router-dom';
import NotFound from './Components/NotFound';
import PageProjeto from './Components/PageProjeto';
import App from './App';

const Rotas = createBrowserRouter([
 
    {
        path:'/',
        element:<App/>
    },

    {
        path:'/projetos',
        element:<PageProjeto/>
    },


    {
        
        path:'*',
        element:<NotFound></NotFound>
    },

    
    
    ])
    
    export default Rotas