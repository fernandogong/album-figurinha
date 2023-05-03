import '../styles/style.css';
import '../styles/PaginaNoticias.module.css';
import selecao from '../img/selecao.jpg';
import Header from './Header.js';
import Menu from './Menu.js';


function PaginaNoticias() {
    return(
        <>
            <Header/>
            <Menu/>
            <div className="principal">
                <h2 className="titulo-centralizado">Boas Vindas a página de notícias !</h2> 
                <p> Nessa página, você vai ficar por dentro de tudo o que rola nessa Copa ! Além de, conteúdos exclusivos para assinantes.</p>
                <p id="missao">Todas as curiosidades, destaques de jogos e entrevistas antes e pós-jogo de todas as seleções se encontram aqui !</p>
            </div>
            <div className="noticias">
                <h3 className="titulo-centralizado">Notícias</h3>
                <ul>
                    <li className="itens">Tudo sobre os Adversários da seleção</li> <br></br>
                    <li className="itens">Provável Convocação?!</li> <br></br>
                    <li className="itens">Onde ficarão os atletas da seleção ?</li> <br></br>
                    <li className="itens">Haaland cita três jogadores brasileiros como inspiração e avalia Neymar</li>
                </ul>
            </div>
            <img src={selecao} alt='imagem-selecao'></img>
        </>
    );
}
export default PaginaNoticias;