import icon from '../../assets/img/notifi-ico.svg';
import './styles.css';

function NotificationButton() {
    return (
        <>
            <div className="dsmeta-btn-red">
                <img src={icon} alt="Notificar"/>
            </div>
        </>
    )
}

export default NotificationButton;
