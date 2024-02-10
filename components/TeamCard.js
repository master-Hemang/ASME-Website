import styles from '../styles/Team.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import imageUrlBuilder from '@sanity/image-url'
import client from '../client';

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const TeamCard = (props) => {
	var name = "";
    var position = "";
	var image = "https://images.pexels.com/photos/555790/pexels-photo-555790.png";
	var l1 = "";
	var l2 = "";
	var l3 = "";
    if (props !== undefined) {
        if (props.member !== undefined) {

            name = props.member.name;
			position = props.member.position;
			// image = props.member.image;
			//props.member.image.asset._ref;
			l1 = props.member.flink;
			l2 = props.member.ilink;
			l3 = props.member.llink;
			if(props.member.image !== undefined){
				image = props.member.image;
        }
    }
}

    return (  
        <>        
        
		
		<div className="col-sm-4 my-auto">
			<div className={`${styles.box} shadow-sm p-4`}>
				<div className={`${styles.imageWrapper} mb-3`}>
					<img className="img-fluid" src={urlFor(image)} style={{height:'100%',width:'100%',objectFit: "scale-down"}}alt="..." />
				</div>
				<div className={styles.boxDesc}>
					<h1>{name}</h1>
					<h3>{position}</h3>
				</div>
				<ul className={styles.social}>
                    <a href={l1} target="_blank"><img src="/fb.webp" className={styles.circleIcon}/></a>
                    <a href={l2} target="_blank"><img src="/ig.webp" className={styles.circleIcon}/></a>
                    <a href={l3} target="_blank"><img src="/li.webp" className={styles.circleIcon}/></a>
				</ul>
			</div>
		</div>
		
		
		
</>

    );
}
 
export default TeamCard;