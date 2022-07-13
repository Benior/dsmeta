import icon from '../../assets/img/logo.svg';
import './styles.css';

function HeaderDsMeta() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">

                    <img src={icon} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/Benior" target="_blank">Benior Cardoso</a></p>

                </div>
            </header>
        </>
    )
}

export default HeaderDsMeta;
