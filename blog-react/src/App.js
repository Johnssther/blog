import './styles/main.scss';
import Index from './layouts/Blog/Index'
import Home from './pages/home/Home';

function App() {
    return (
       <Index>
           <Home></Home>
       </Index>
    );
}

export default App;
