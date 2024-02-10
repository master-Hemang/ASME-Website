import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/VideoCar.module.scss'


const NextJsCarousel = ({ videos }) => {

	return (
		<div>
			{/* {console.log(this.props.video)} */}
			{/* <h1>{this.props}</h1> */}
			<Carousel autoPlay={true} infiniteLoop={true}>

				{videos &&
					videos.map((item, i) => (
						<iframe  height="498" src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					))}

			</Carousel>
		</div>
	);
}

export default NextJsCarousel;
