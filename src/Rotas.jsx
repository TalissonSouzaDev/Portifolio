import {createBrowserRouter} from 'react-router-dom';
import NotFound from './Components/NotFound';
import PageProjeto from './Components/PageProjeto';
import App from './App';

const Rotas = createBrowserRouter([
 
    {
        path:'Portifolio',
        element:<App/>
    },

    {
        path:'Portifolio/projetos',
        element:<PageProjeto/>
    },


    {
        
        path:'*',
        element:<NotFound></NotFound>
    },

    
    
    ])
    
    export default Rotas