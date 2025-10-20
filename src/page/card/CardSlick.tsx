import Slider from "react-slick"
import { CardHome } from "../../components/svg/CardIcon"
import { baseURL } from "../../utils/utils"
import { useEffect, useRef } from "react"
import { FilesType, ProductType } from "../../type"

let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    className: "card-slider-slick-lib",
}

export const CardSlick = ({ product }: { product: ProductType | undefined }) => {
    
    const refSlick = useRef<Slider | null>(null)
    const files = product?.files 
    const toSlide = (num: number) => {
        if (refSlick) {
            refSlick?.current?.slickGoTo(num)
        }
    }
    useEffect(() => {
        if (refSlick.current && product) {
            refSlick.current.slickGoTo(0)
        }
    }, [product?.id])
    
    if (!files || !product) {
        return <></>
    }

    return (
        <div className="card-slider">
            <div>
                <div className="card-slider-route">
                    <CardHome />
                    <span>{'>'}</span>
                    <div>{product.category.name}</div>
                    <span>{'>'}</span>
                    <div>{product.title}</div>
                </div>
            </div>
            <div className="card-slider-slick">
                <Slider {...settings} ref={refSlick}>
                    {files?.video && (
                        <button className="card-slider-slick-item">
                            <video controls style={{ width: '100%', height: '100%' }}>
                                <source src={files.video} type="video/mp4" />
                                Ваш браузер не поддерживает тег video.
                            </video>
                        </button>
                    )}

                    {files?.images?.map((image, index) => (
                        <button key={index} className="card-slider-slick-item">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </button>
                    ))}
                </Slider>
            </div>
            <div className="card-slider-dots">
                {[files?.video, ...files?.images, ]
                    .filter((item) => Boolean(item))
                    .map((item, index) => (
                        <button key={index} className="card-slider-dots-button" onClick={() => toSlide(index)}>
                            {item.includes('.mp4') ? (
                                <video style={{ width: '40px' }}>
                                    <source src={item} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={item} alt={`Dot ${index + 1}`} />
                            )}
                        </button>
                    ))}
            </div>
        </div>
    )
}
