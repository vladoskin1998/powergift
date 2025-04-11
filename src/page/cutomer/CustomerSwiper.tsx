import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { CustomerIconSee } from "../../components/svg/CustomerIcon"

export const CustomerSwiper = () => {
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
        <div className="customer-right-swiper">
            <Swiper
              
                spaceBetween={isVertical ? 94 : 34}
                slidesPerView={"auto"}
                direction={isVertical ? "vertical" : "horizontal"}
                breakpoints={{
                    835: {
                        spaceBetween: 0,
                    },
                    1024: {
                        spaceBetween: 30,
                    },
                }}
                className="customer-right-swiper-reacr-sw"
            >
                <SwiperSlide style={{ width: "412px", maxHeight: "220px" }}>
                    <div>
                        <div className="customer-right-swiper-item">
                            <div>
                                <h6 className="customer-right-swiper-item-1">
                                    Замовлення<b> #12345</b>
                                </h6>
                                <p className="customer-right-swiper-item-2">
                                    08 тра 2024, 15:22
                                </p>
                            </div>
                            <div className="customer-right-swiper-item-3">
                                <p>Рахунок:</p>
                                <p>№01052024</p>
                            </div>
                            <div>
                                <p className="customer-right-swiper-item-4">
                                    Статус
                                </p>
                                <h6 className="customer-right-swiper-item-5">
                                    Бронювання
                                </h6>
                            </div>
                            <div className="customer-right-swiper-item-6">
                                <p>Разом:</p>
                                <p> 40678,16 грн</p>
                            </div>
                        </div>
                        <div className="customer-right-swiper-item-see">
                            <p>Дивитися деталі замовлення</p>
                            <button>
                                <CustomerIconSee />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: "412px", maxHeight: "220px" }}>
                    <div>
                        <div className="customer-right-swiper-item">
                            <div>
                                <h6 className="customer-right-swiper-item-1">
                                    Замовлення<b> #12345</b>
                                </h6>
                                <p className="customer-right-swiper-item-2">
                                    08 тра 2024, 15:22
                                </p>
                            </div>
                            <div className="customer-right-swiper-item-3">
                                <p>Рахунок:</p>
                                <p>№01052024</p>
                            </div>
                            <div>
                                <p className="customer-right-swiper-item-4">
                                    Статус
                                </p>
                                <h6 className="customer-right-swiper-item-5">
                                    Бронювання
                                </h6>
                            </div>
                            <div className="customer-right-swiper-item-6">
                                <p>Разом:</p>
                                <p> 40678,16 грн</p>
                            </div>
                        </div>{" "}
                        <div className="customer-right-swiper-item-see">
                            <p>Дивитися деталі замовлення</p>
                            <button>
                                <CustomerIconSee />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    style={{ width: "412px", maxHeight: "220px" }}
                    className="customer-right-swiper-black"
                >
                    <div>
                        <div className="customer-right-swiper-item">
                            <div>
                                <h6 className="customer-right-swiper-item-1">
                                    Замовлення<b> #12345</b>
                                </h6>
                                <p className="customer-right-swiper-item-2">
                                    08 тра 2024, 15:22
                                </p>
                            </div>
                            <div className="customer-right-swiper-item-3">
                                <p>Рахунок:</p>
                                <p>№01052024</p>
                            </div>
                            <div>
                                <p className="customer-right-swiper-item-4">
                                    Статус
                                </p>
                                <h6 className="customer-right-swiper-item-5">
                                    Бронювання
                                </h6>
                            </div>
                            <div className="customer-right-swiper-item-6">
                                <p>Разом:</p>
                                <p> 40678,16 грн</p>
                            </div>
                        </div>
                        <div className="customer-right-swiper-item-see">
                            <p>Дивитися деталі замовлення</p>
                            <button>
                                <CustomerIconSee />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{ width: "412px", maxHeight: "220px" }}
                    className="customer-right-swiper-black"
                >
                    <div>
                        <div className="customer-right-swiper-item">
                            <div>
                                <h6 className="customer-right-swiper-item-1">
                                    Замовлення<b> #12345</b>
                                </h6>
                                <p className="customer-right-swiper-item-2">
                                    08 тра 2024, 15:22
                                </p>
                            </div>
                            <div className="customer-right-swiper-item-3">
                                <p>Рахунок:</p>
                                <p>№01052024</p>
                            </div>
                            <div>
                                <p className="customer-right-swiper-item-4">
                                    Статус
                                </p>
                                <h6 className="customer-right-swiper-item-5">
                                    Бронювання
                                </h6>
                            </div>
                            <div className="customer-right-swiper-item-6">
                                <p>Разом:</p>
                                <p> 40678,16 грн</p>
                            </div>
                        </div>
                        <div className="customer-right-swiper-item-see">
                            <p>Дивитися деталі замовлення</p>
                            <button>
                                <CustomerIconSee />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
