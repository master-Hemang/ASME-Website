import Image from "next/image";
import Head from 'next/head'
import styles from '../styles/AllEvents.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import EventCard from "../components/EventCard";
import client from '../client'

const Events = ({events}) => {
    console.log(events);
    return ( 
        <>
        <Head>
            <title>ASME | Ongoing Events</title>
        </Head>
        {/* <h1>{post.title}</h1> */}
        <div>
                <div className={styles.bgWrap}>
            </div>
                <div className={styles.typeBox}>
                    <h1>Ongoing Events</h1>
                    <h4>ASME - Student Chapter at IIT(ISM) Dhanbad</h4>
                </div>
            </div>
        <div className={`container ${styles.eventHeading}`} style={{margin: "32px auto"}}>
            <h1>Ongoing Events</h1>
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
};

export async function getStaticProps() {
    // It's important to default the slug so that it doesn't return "undefined"
    const events = await client.fetch(`*[_type == "event" && category == "ongoing-event"]`);
    return {
      props: {
        events
      }
    }
  }


 
export default Events;