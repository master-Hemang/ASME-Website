import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import styles2 from '../styles/Team.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
  return (
    <>
      <Head>
        <title>ASME | Contact</title>
      </Head>
      <div>
        <div className={styles.bgWrap}>
        </div>
        <div className={styles.typeBox}>
          <h1>Connect with us</h1>
          <h4>ASME - Student Chapter at IIT(ISM) Dhanbad</h4>
        </div>
      </div>
      
      <div className={`"container" ${styles.container2}`}>
        <div className={`"row" ${styles.roww}`}>
          <div className="col-lg-4 my-auto">
            <div className={`${styles2.box} ${styles.box} shadow-sm p-4`}>
                <div className={`${styles2.imageWrapper} mb-3`}>
                  <img className="img-fluid" src="/prof.webp" style={{ height: '100%', width: '100%', objectFit: "scale-down" }} alt="..." />
                </div>
                <div className={styles2.boxDesc}>
                  <h1>Prof. Sarthak S. Singh</h1>
                  <h3>Faculty Advisor</h3>
                </div>
                <ul className={styles2.social}>
                  <a href="mailto:sarthaksingh@iitism.ac.in" target="_blank"><img src="/mail.webp" className={styles2.circleIcon} /></a>
                  <h3>Email</h3>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 my-auto">
            <div className={`${styles2.box } ${styles.box} shadow-sm p-4`}>
                <div className={`${styles2.imageWrapper} mb-3`}>
                  <img className="img-fluid" src="/prof.webp" style={{ height: '100%', width: '100%', objectFit: "scale-down" }} alt="..." />
                </div>
                <div className={styles2.boxDesc}>
                  <h1>Sk Mohammed Mamoon Mondal</h1>
                  <h3>Chair person</h3>
                </div>
                <ul className={styles2.social}>
                  <a href="mailto:sheikh.mamoon.18je0823@mech.iitism.ac.in" target="_blank"><img src="/mail.webp" className={styles2.circleIcon} /></a>
                  <h3>Email</h3>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 my-auto">
            <div className={`${styles2.box} ${styles.box} shadow-sm p-4`}>
                <div className={`${styles2.imageWrapper} mb-3`}>
                  <img className="img-fluid" src="/prof.webp" style={{ height: '100%', width: '100%', objectFit: "scale-down" }} alt="..." />
                </div>
                <div className={styles2.boxDesc}>
                  <h1>Soumyadip Maiti</h1>
                  <h3>Co-chair person</h3>
                </div>
                <ul className={styles2.social}>
                  <a href="mailto:soumyadip.18je0830@mech.iitism.ac.in" target="_blank"><img src="/mail.webp" className={styles2.circleIcon} /></a>
                  <h3>Email</h3>
                </ul>
              </div>
            </div>

        </div>
      </div>  
    </>
  );
}

export default Contact;