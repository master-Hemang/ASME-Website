import styles from '../styles/TypeWrite.module.css'

const TypeWrite = () => {
    return ( 
      <div className={styles.rwWrapper}>
      <div className={`${styles.rwWords} ${styles.rwWords1}`}>
        <p>Welcome To ASME</p>
        <p>Student Chapter At</p>
        <p>IIT(ISM) Dhanbad</p>
        <p>American Society Of Mechanical Engineers</p>
        <p>Setting The Standard</p>
        <p>Legacy That Inspires The Future</p>
      </div>
    </div>
     );
}
 
export default TypeWrite;