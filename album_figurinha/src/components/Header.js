import titulo_img from '../img/titulo.jpg';

function Header() {
    return(
        <header>
            <div className="header">
                <img src={titulo_img} alt='titulo_imagem'/>
            </div>
        </header>
    );
}
export default Header;