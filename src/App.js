import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaginaPrincipal from './PaginaPrincipal';
import Inicio from './Inicio';
import Perfil from './Perfil';
import Configuraciones from './Configuraciones';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inicio" component={Inicio} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/configuraciones" component={Configuraciones} />
        <Route path="/" component={PaginaPrincipal} />
      </Switch>
    </Router>
  );
}

export default App;
