import { baseURL } from "../../utils/utils"
import "../catalog/catalog.scss"
import { HeaderIconBasket } from "../svg/HeaderIcon"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useState, useEffect } from "react"
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

    return (
        <Swiper
            direction={isVertical ? "vertical" : "horizontal"}
            spaceBetween={34}
            slidesPerView={"auto"}
            style={{
                padding: isVertical ? "0 11px 0 11px " : "0 0 198px 36px",
            }}
            breakpoints={{
                768: {
                    spaceBetween: 20,
                },
                1024: {
                    spaceBetween: 30,
                },
            }}
        >
            {[
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
            ].map((item) => (
                <SwiperSlide style={{ width: "320px" }}>
                    <div className="catalog-filter-list-item">
                        <div className="catalog-filter-list-item-img">
                            <img src={baseURL + item} alt="" />
                        </div>

                        <div className="catalog-filter-list-item-foot">
                            <div className="catalog-product-item-staff">
                                <img
                                    src={baseURL + "/Images/New staff.png"}
                                    alt=""
                                />
                            </div>
                            <img src={baseURL + "/Images/Colors.png"} alt="" />
                            <div className="catalog-product-item-thr">
                                <div>
                                    <span> Артикул:</span> <b>PG-240143</b>{" "}
                                </div>
                                <div>
                                    <span>Бренд:</span> <p>Fun Factory</p>{" "}
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
                                <img
                                    src={baseURL + "/Images/Basket.png"}
                                    alt=""
                                />
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
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
