import {createBrowserRouter} from 'react-router-dom';
import NotFound from './Components/NotFound';
import PageProjeto from './Components/PageProjeto';
import App from './App';
import Manuntencao from './Components/Home/Manuntencao';

const Rotas = createBrowserRouter([
 
    {
        path:'Portifolio',
        element:<Manuntencao/>
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