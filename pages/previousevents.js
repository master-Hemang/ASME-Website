import Image from "next/image";
import { bgWrap, bgText } from '../styles/Home.module.css'
import styles from '../styles/AllEvents.module.css'
import EventCard from "../components/EventCard";
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import client from '../client'

const previousEvents = ({events}) => {
    return ( 
        <>
        <Head>
            <title>ASME | Past Events</title>
        </Head>
        <div>
                <div className={styles.bgWrap}>
            </div>
                <div className={styles.typeBox}>
                    <h1>Past Events</h1>
                    <h4>ASME - Student Chapter at IIT(ISM) Dhanbad</h4>
                </div>
            </div>
            <div className={`container ${styles.eventHeading}`} style={{margin: "32px auto"}}>
            <h1>Previous Events</h1>
            <hr/>
            <div className="row justify-content-center">
            {events &&
            events.map((item, i) => (
              <EventCard
                event={item}
                key={i}
              />
            ))}
            </div>
        </div>

        </>

     );
}

export async function getStaticProps() {
    // It's important to default the slug so that it doesn't return "undefined"
    const events = await client.fetch(`*[_type == "event" && category == "past-event"]`);
    return {
      props: {
        events
      }
    }
  }
 
export default previousEvents;