import Image from "next/image";
import styles from '../styles/Resource.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import Link from 'next/link'



const Resources = () => {

    return (
        <>
            <Head>
                <title>ASME | Resources</title>
            </Head>
            <div>
                <div className={styles.bgWrap}>
                </div>
                <div className={styles.typeBox}>
                    <h1>Resources | Placement Data</h1>
                    <h4>ASME - Student Chapter at IIT(ISM) Dhanbad</h4>
                </div>
            </div>
            <div className={styles.header}>

            </div>
            <div className={styles.row}>
                <div className={styles.side}>
                    
                    <h1>Some Important Links</h1>
                    <br/>
                    <ul className={styles.linkList}>
                        <li><a href="https://www.asme.org/about-asme/careers-at-asme">ASME-Student</a></li>
                        <li><a href="https://www.iitism.ac.in/iitismnew/">IIT(ISM) Dhanbad</a></li>
                        <li><a href="https://signin.asme.org/s/login/?startURL=%2Fs%2F&expid=default#-10">Drive Link</a></li>
                        <li><Link href="#resFooter"><a>Follow us on Social media</a></Link></li>
                    </ul>
                    <br/>
                    <h5 style={{fontSize: '1.65em'}}>Latest Updates from ASME at IIT(ISM) Dhanbad:</h5>
                    {/* <div className={styles.fakeimg} style={{height:'200px'}}> */}
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fasme.iit.ism.ss&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                    {/* </div> */}
                    <br/>
                    
                    
                    
                </div>
                <div className={styles.main}>
                    <h2>ASME Followers From IIT Dhanbad</h2>
                    <h5>Title description, may 7, 2022</h5>
                    <div className={styles.fakeimg} style={{ height: '200px' }}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, May 2, 2022</h5>
                    <div className={styles.fakeimg} style={{ height: '200px' }}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, May 2, 2022</h5>
                    <div className={styles.fakeimg} style={{ height: '200px' }}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, May 2, 2022</h5>
                    <div className={styles.fakeimg} style={{ height: '200px' }}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div id="resFooter">

            </div>
        </>
    );
}

export default Resources;