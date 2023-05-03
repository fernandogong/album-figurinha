import estadio1 from '../img/estadio1.jpg';
import estadio2 from '../img/estadio2.png';
import estadio3 from '../img/estadio3.jpeg';
import '../styles/style.css';
import Header from './components/Header.js';
import Menu from './components/Menu.js';

function PaginaEstadios() {
    return(
        <>
            <Header/>
            <Menu/>
            <div className="figurinhas">
                <div className="row">
                    <div className="col-3 menu">
                        <img src={estadio1} alt = 'estadio1'/>
                    </div>
                    <div className="col-3 menu">
                        <img src={estadio2} alt = 'estadio2'/>
                    </div>
                    <div className="col-3 menu">
                        <img src={estadio3} alt = 'estadio3'/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PaginaEstadios;