import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
export const CustomerSwiper = () => {
    return (
        <div className="customer-right-swiper">
            <Swiper
                spaceBetween={34}
                slidesPerView={'auto'}
                breakpoints={{

                    768: {
                      spaceBetween: 20, 
                    },
                    1024: {
                      spaceBetween: 30, 
                    },
                  }}
                className="customer-right-swiper-reacr-sw"
            >
                <SwiperSlide style={{width:"412px"}}>
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
                </SwiperSlide>
                <SwiperSlide style={{width:"412px"}}>
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
                </SwiperSlide>

                <SwiperSlide style={{width:"412px"}} className="customer-right-swiper-black">
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
                </SwiperSlide>
                <SwiperSlide style={{width:"412px"}} className="customer-right-swiper-black">
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
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
