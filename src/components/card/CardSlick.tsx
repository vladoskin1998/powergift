
import Slider from "react-slick"
import { CardHome } from "../svg/CardIcon"
import { baseURL } from "../../utils/utils"
import { useRef } from "react"
var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    className: 'card-slider-slick-lib'
}
export const CardSlick = () => {

    const refSlick = useRef<Slider | null>(null)

    const toSlide = (num:number) => {
        if(refSlick){
                    refSlick?.current?.slickGoTo(num)
        }

    }
    return (
        <div className="card-slider">
            <div>
                <div className="card-slider-route">
                    <CardHome />
                    <span>{">"}</span>
                    <div>Категорія</div>
                    <span>{">"}</span>
                    <div>Назва продукції “Yummy” 600 мл</div>
                </div>
            </div>
            <div className="card-slider-slick">
                <Slider {...settings} ref={refSlick}>
                    {[
                         "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                         "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                         "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                         "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                         "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                         "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                    ].map((item, index) => (
                        <button key={index} className="card-slider-slick-item">
                            <img src={baseURL + item} alt="" />
                        </button>
                    ))}
                </Slider>
            </div>
            <div className="card-slider-dots">
                {[
                    "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                    "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                    "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                    "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                    "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                    "/Images/Speaker_Cube_PowerGifts_130210-V1.png",
                ].map((item,index) => (
                    <button key={index} className="card-slider-dots-button" onClick={() => toSlide(index)}>
                        <img src={baseURL + item} alt="" />
                    </button>
                ))}
            </div>
        </div>
    )
}
