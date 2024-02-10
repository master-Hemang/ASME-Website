import TeamCard from "../components/TeamCard";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Team.module.css'
import Head from 'next/head';
import client from '../client'

const Team = ({ team }) => {
    console.log(team);
    return (
        <>
            <Head>
                <title>ASME | Our Team</title>
            </Head>
            <div>
                <div className={styles.bgWrap}>
                </div>
                <div className={styles.typeBox}>
                    <h1>Meet our Team</h1>
                    <h4>ASME - Student Chapter at IIT(ISM) Dhanbad</h4>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {team &&
                        team.map((item, i) => (
                            <TeamCard
                                member={item}
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
    const team = await client.fetch(`*[_type == "member"]`);
    return {
        props: {
            team
        }
    }
}


export default Team;