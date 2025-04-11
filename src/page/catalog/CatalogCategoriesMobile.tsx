import { useEffect, useRef, useState } from "react"
import { baseURL } from "../../utils/utils"
import { HeaderIconClose, HeaderIconSearch } from "../../components/svg/HeaderIcon"
import { CatalogFilter } from "../___temp_catalog/CatalogFilter"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import { NavbarCategoriesRes } from "../../type"
import { $api } from "../../api"
import { useAppContext } from "../../context/AppContext"
import { Link } from "react-router-dom"
import { IconsGifts } from "../../components/svg/IconGifts"

const getNavBarData = async () => {
    try {
        const { data } = await $api.get("shop/categories")
        return data
    } catch (error) {
        console.error(error)
    }
}

export const CatalogCategoriesMobile = () => {
    const { currentSubCategorie } = useAppContext()
    const [openFilter, setOpenFilter] = useState(false)
    let videoRef = useRef<HTMLVideoElement | null>(null)
    const handleOpenFilter = () => {
        setOpenFilter(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Auto-play was prevented:", error)
            })
        }
        return () => {
            videoRef.current = null
        }
    }, [])

    const navToCategories = (e: React.MouseEvent, id: number | undefined) => {
        if (!id) {
            console.error("id is undefinded")
        }
        e.preventDefault()
        navigate(`/catalog/${id}/products`)
    }

    return (
        <div className="catalog-main">
            <video
                className="catalog-main-back"
                autoPlay
                loop
                muted
                playsInline
                ref={videoRef}
                preload="metadata"
            >
                <source src={baseURL + `/Images/Coub.mp4`} type="video/mp4" />
            </video>
            <div className="catalog-main-list  catalog-main-list-none">
                {currentSubCategorie?.subcategories.map((item) => (
                    <button
                    key={item.categoryId}
                        onClick={(e) => navToCategories(e, item.categoryId)}
                        className="catalog-main-product navbar_list-item"
                        style={{backgroundImage: `url(${item.icon})`}}
                    >
                        <div className="catalog-main-product-img">
                            {!item?.icon &&
                                <IconsGifts />
                            }
                        </div>
                        <h5 style={item?.icon ? {paddingTop: '130px'} : {}}>{item.title}</h5>
                    </button>
                ))}
            </div>
            <div className="catalog-main-list-none catalog-main-all-display"/>
            <div className="catalog-product-navigation-foot catalog-main-list-none">
                © <b>Power</b>Gifts. Ukrainian promo gifts b2b company. All
                Rights Reserved. Let’s create.
            </div>
            {openFilter && (
                <div className="catalog-modal">
                    <button
                        className="catalog-modal-close"
                        onClick={() => setOpenFilter(false)}
                    >
                        <HeaderIconClose />
                    </button>
                    <CatalogFilter />
                    <button
                        className="catalog-modal-go"
                        onClick={() => setOpenFilter(false)}
                    >
                        Застосувати
                    </button>
                </div>
            )}
        </div>
    )
}
