import styles from '../styles/EventCard.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const EventCard = (props) => {
    var title = "";
    var description = "";
    if (props !== undefined) {
        if (props.event !== undefined) {

            title = props.event.title;
            {
                props.event.body[0] &&
                props.event.body[0].children.map((item, i) => (
                    description += item.text
                ))
            }
        }
    }
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(false);
        document.body.style.overflow = 'visible';

    }
    function toggle1(){
        setShowMe(true);
        window. scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
            document.body.style.overflow = 'hidden';
        // body.scroll = false;
    }
    return (
        <>

            {/* popup card */}
            <div style={{
        display: showMe?"block":"none"
      }}>
        {/* This should toggle my display */}
            <div className={styles.overlay}>
                <div className={styles.popup}>
                    <h2>{title}</h2>
                    <a className={styles.close} onClick={toggle}href="#">&times;</a>
                    <div className={styles.content}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
      </div>

            {/* flip card */}
            <div className={`${styles.flip} ${styles.flipVertical} `}>
                <div className={`${styles.front} ${styles.bgImage} ${styles.frontDesign}`} >
                    <h1>{title}</h1>
                </div>
                <div className={`${styles.back} ${styles.bgImage2}`}>
                    <h1>Event Details</h1>
                    <p style={{ textAlign: "justify", fontSize: "15px" }}>{description.substring(0, 200)}   . . .</p>
                    <div id="wrapper">
                        <p><a className={styles.button} onClick={toggle1}>Read More</a></p>
                    </div>
                </div>
            </div>
            {/* <h1>{props.event.title}</h1> */}
        </>
    );
}

export default EventCard;