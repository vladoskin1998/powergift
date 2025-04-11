import { useState, useEffect } from "react"

import "../catalog/catalog.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"


import { baseURL } from "../../utils/utils"
import { HeaderIconBasket } from "../../components/svg/HeaderIcon"

interface CatalogListItemProps {
    imageSrc: string
}

export const CatalogListItem: React.FC<CatalogListItemProps> = ({ imageSrc }) => {
    return (
        <div className="catalog-filter-list-item" style={{ maxHeight: "450px", marginBottom: "20px" }}>
            <div className="catalog-filter-list-item-img">
                <img src={baseURL + imageSrc} alt="" />
            </div>
            <div className="catalog-filter-list-item-foot">
                <div className="catalog-product-item-staff">
                    <img src={baseURL + "/Images/New staff.png"} alt="" />
                </div>
                <img src={baseURL + "/Images/Colors.png"} alt="" />
                <div className="catalog-product-item-thr">
                    <div>
                        <span>Артикул:</span> <b>PG-240143</b>
                    </div>
                    <div>
                        <span>Бренд:</span> <p>Fun Factory</p>
                    </div>
                    <div>
                        <span>Бренд:</span> <h6>Floyd</h6>
                    </div>
                </div>
                <h6 className="catalog-filter-list-item-foot-price">
                    Пляшка для води “Yummy” 600 мл.
                </h6>
                <p className="catalog-filter-list-item-foot-order">
                    ТОВАР Під замовлення
                    <img src={baseURL + "/Images/Basket.png"} alt="" />
                </p>
                <div className="catalog-filter-list-bot">
                    <div className="catalog-product-item-bot">
                        <div>
                            <h5>750</h5>
                            <span>грн</span>
                        </div>
                        <div className="catalog-product-item-bot-it">
                            1029
                            <p>в наявності</p>
                        </div>
                        <div className="catalog-product-item-bot-it">
                            1029
                            <p>доступно</p>
                        </div>
                    </div>
                    <button className="catalog-filter-list-item-foot-but">
                        <div className="catalog-filter-list-item-foot-but-ico">
                            <HeaderIconBasket />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const RowRightList = () => {
    const [isVertical, setIsVertical] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 835) {
            setIsVertical(true)
        } else {
            setIsVertical(false)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const productItems = [
        "/ImagesTmp/botl1.png",
        "/ImagesTmp/botl2.png",
        "/ImagesTmp/botl3.png",
        "/ImagesTmp/botl4.png",
        "/ImagesTmp/botl1.png",
        "/ImagesTmp/botl1.png",
        "/ImagesTmp/botl2.png",
        "/ImagesTmp/botl3.png",
        "/ImagesTmp/botl4.png",
        "/ImagesTmp/botl1.png",
    ]

    return isVertical ? (
        <div
            style={{
           
                padding: "0 11px 0 11px",
            }}
        >
            {productItems.map((item, index) => (
                <CatalogListItem key={index} imageSrc={item} />
            ))}
        </div>
    ) : (
        <Swiper
            direction="horizontal"
            spaceBetween={34}
            slidesPerView={"auto"}
            className=""
            style={{ padding: "0 0 198px 36px" }}
            breakpoints={{
                768: {
                    spaceBetween: 20,
                },
                1024: {
                    spaceBetween: 30,
                },
            }}
        >
            {productItems.map((item, index) => (
                <SwiperSlide key={index} style={{ width: "320px", maxHeight: "450px" }}>
                    <CatalogListItem imageSrc={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
