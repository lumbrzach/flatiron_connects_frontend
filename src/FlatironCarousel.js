import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class FlatironCarousel extends React.Component {

    constructor() {
        super()
        this.state = {
            activeIndex: null
        }
    }

    componentDidMount(){ this.setState({activeIndex:0}) }

    render() {
        return (
            <Carousel autoPlay={true} swipeable={true} showThumbs={false} infiniteLoop={true} interval={3000}>
                <div>
                    <img src="https://i.imgur.com/6GwikNN.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://i.imgur.com/05DDqSY.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://i.imgur.com/EwzujL1.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
}