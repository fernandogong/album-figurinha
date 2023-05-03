import vinicius from '../img/vinicius-jr.png';
import geromel from '../img/geromel.jpg';
import cristiano from '../img/cristiano.png';
import neymar from '../img/neymar-jr.png';
import alvaro from '../img/alvaro.jpeg';
import andre from '../img/andre.jpeg';
import fagner from '../img/fagner.jpg';
import henrique from '../img/henrique.jpg';
import messi from '../img/messi.png';

function Index() {
    return(
        <div className="figurinhas">
            <div className="row">
                <div className="col-3 menu">
                    <img src={vinicius} alt = 'vinicius-jr'/>
                </div>
                <div className="col-3 menu">
                    <img src={geromel} alt = 'geromel'/>
                </div>
                <div className="col-3 menu">
                    <img src={cristiano} alt = 'cristiano'/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 menu">
                    <img src={neymar} alt = 'neymar-jr'/>
                </div>
                <div className="col-3 menu">
                    <img src={fagner} alt = 'fagner'/>
                </div>
                <div className="col-3 menu">
                    <img src={henrique} alt = 'henrique'/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 menu">
                    <img src={alvaro} alt = 'alvaro'/>
                </div>
                <div className="col-3 menu">
                    <img src={andre} alt = 'andre'/>
                </div>
                <div className="col-3 menu">
                    <img src={messi} alt = 'messi'/>
                </div>
            </div>
        </div>
    );
}
export default Index;