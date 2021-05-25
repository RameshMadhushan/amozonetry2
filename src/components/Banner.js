import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";







function Banner() {
    return (
        <div className=" relative lg:rounded-2xl max-w-screen-lg overflow-hidden lg:mt-6 mx-auto   ">
            

            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />

            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >

                <div> <img src="https://links.papareact.com/gi1" alt="" loading="lazy" /> </div>
                <div> <img src="https://links.papareact.com/6ff" alt="" loading="lazy" /> </div>
                <div> <img src="https://links.papareact.com/7ma" alt="" loading="lazy" /> </div>


            </Carousel>


        </div>
    )
}

export default Banner;



