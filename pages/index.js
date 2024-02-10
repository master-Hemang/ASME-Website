import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { bgWrap, typeBox, bgText } from '../styles/Home.module.css'
import HomeEvents from '../components/HomeEvents';
import TypeWrite from '../components/TypeWrite';
import NextJsCarousel from '../components/NextJsCarousel';
import client from '../client'

export default function Home({videos}) {
  
  return (
    <>
      <Head>
        <title>ASME | IIT(ISM) Dhanbad</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

      </Head>
      <div>
        <div>
          <div className={bgWrap}>
          </div>
          <div className={typeBox} style={{ filter: "brightness(100%)" }}>
            <TypeWrite />
            <br />
            <h4>IIT(ISM) Dhanbad</h4>
          </div>
        </div>

        <div className={styles.aboutBox} id="aboutContainer">
          <h1>About - ASME</h1>
          <h4>Student Chapter at IIT(ISM) Dhanbad</h4>
          <hr />
          {/* <div class="container"> */}
          <div className={styles.row}>
            <div className={styles.column} >
              <img src="/logo.jpg" />
            </div>
            <div className={styles.column}>
              <p>We, as ASME IIT ISM Student Section, promote sustainable engineering practices in various technical fields. Provides a platform for technical enthusiasts to inculcate a professional attitude and technological mindset.
              </p>
              <br />
              <p>
                We indulge together to organize numerous activities of scientific content, professional and personal values such as engineering competitions, technical presentations, skill development activities, networking, assisting in the transition from student to professional life. We firmly believe in and facilitate towards development, dissemination, application of knowledge for students by organising webinars, discussions and competitions.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}

      </div>
      <div className={styles.eventBox} id="eventContainer">
        <h1>Events</h1>
        <hr />
        <HomeEvents />
      </div>

      <div className={styles.videoHeading}>
        <h1>Videos</h1>
        <hr />
      </div>
      <div className={styles.videoBox}>
        <div>
          <NextJsCarousel videos={videos}/>
        </div>
      </div>
    </>

  )
}

export async function getStaticProps() {
	// It's important to default the slug so that it doesn't return "undefined"
	const videos = await client.fetch(`*[_type == "video"]`);
	return {
		props: {
			videos
		}
	}
}
