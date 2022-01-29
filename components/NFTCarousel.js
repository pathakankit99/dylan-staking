import React from "react";
import NFT from "./NFT";
import { useSelector } from "react-redux";
import Slider from "react-slick";
function NFTCarousel() {
  const { user, wallet_id, nft_list } = useSelector((state) => ({
    wallet_id: state.app_reducer.wallet_id,
    nft_list: state.app_reducer.nft_list,
  }));
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      autoplay: true,
      swipeToSlide: true,
      slidesToScroll: 1,
    
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 100000, settings: { slidesToShow: 4 } },
      ],
    };
  return (
    <div className="">
      <Slider {...settings}>
        {nft_list?.map((item) => (
          <div key={item.image} className="p-6" style={{width: 200}}>
            <div className="">
              <div className="center">
                <img src={item.image} alt="NFT"/>
              </div>
              <div className="py-3 bg-brand_black px-2">
                <h5 className="text-md font-bold">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NFTCarousel;
