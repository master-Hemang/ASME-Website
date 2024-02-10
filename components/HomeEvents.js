import styles from '../styles/HomeEvents.module.css'
import Link from 'next/link';


const HomeEvents = () => {
    return (  
        <>
            <div className={styles.cardsList}>
                      <Link href="/previousevents">
                      <div className={styles.card}>
                        <div className={styles.cardImage}>
                          <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
                        </div>
                        <div className={styles.cardTitle}>
                          <p>Past Events</p>
                        </div>
                      </div>
                      </Link>

                      <Link href="/events">
                      <div className={styles.card}>
                        <div className={styles.cardImage}> 
                          <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                        <div className={`${styles.cardTitle} ${styles.titleWhite}`}>
                          <p>Ongoing Events</p>
                        </div>
                      </div>
                      </Link>
                      
                        <Link href="/upcomingevents">
                        
                        <div className={styles.card}>
                        <div className={styles.cardImage}>
                          <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
                          </div>
                        <div className={`${styles.cardTitle} ${styles.titleWhite}`}>
                          <p>Upcoming Events</p>
                        </div>
                        </div>
                        </Link>
              </div>
        </>
    );
}
 
export default HomeEvents;