import styles from '../styles/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

const Footer = () => {
    return ( 
			<footer id={styles.primaryFooter}>
	<div className={`container ${styles.footerWidgetArea}`}>
		<div className="row">
			<div className="col-md-4 p-3">
				<div className={styles.footerWidgetHeading}>
					<h4>ASME IIT(ISM) Dhanbad</h4>
				</div>
				<p>ASME IIT(ISM) Student Section is a college chapter recognized by the American Society of Mechanical Engineers working in the campus of IIT(ISM) Dhanbad.</p>
			</div>
			<div className="col-md-4 p-3">
				<div className={styles.footerWidgetHeading}>
					
				<div className={styles.footerSocialIcon}>
                                <div className={styles.socialTitle}>Follow us</div>
                                <a href="https://www.facebook.com/asme.iit.ism.ss/"><img src="/fb.webp" className={styles.circleIcon}/></a>
                                <a href="https://instagram.com/asme.iitism?igshid=YmMyMTA2M2Y"><img src="/ig.webp" className={styles.circleIcon}/></a>
                                <a href="https://www.linkedin.com/company/asme-iit-ism-student-section/mycompany/"><img src="/li.webp" className={styles.circleIcon}/></a>
                            </div>
				</div>
				</div>
			<div className="col-md-4 p-3">
				<div className={styles.footerWidgetHeading}>
					<h4>Quick Links</h4>
				</div>
				<ul className={styles.linkediting}>
                        <li><Link href="/contact"><a ><img src="/ar.webp" className={styles.fa} />Contact Us</a></Link></li>
                        <li><Link href="/team"><a ><img src="/ar.webp" className={styles.fa} />Our Team</a></Link></li>
                        <li><Link href="/"><a><img src="/ar.webp" className={styles.fa} />Web Development Team</a></Link></li>
	                  </ul>
			</div>
		</div>
	</div>
    <hr/>
	<div className={styles.copyrightArea}>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className={`${styles.copyrightText} text-left`}>
                            <p>Designed by &copy;ASME Web Development Team {new Date().getFullYear()}</p>
                        </div>
				</div>
			</div>
		</div>
	</div>
	
</footer>
    );
}
 
export default Footer;