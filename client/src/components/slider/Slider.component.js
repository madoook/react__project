import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

const imgUrl = 'http://localhost:4001/api/v1/';

class Slider extends Component {

    render(){
           const image = this.props.images.map((image,i) => {
               return <div key={i}>
                   <img src={imgUrl + image} alt={Date.now()}/>
               </div>
            });
        return (
            <Carousel>
                {image}
            </Carousel>
        )
    }
}

export default Slider;