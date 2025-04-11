import { useNavigate } from "react-router-dom"
import { ReactSVG } from "react-svg"
import "./navbar.scss"
import { $api } from "../../api"
import { useQuery } from "react-query"
import { CategoryType, NavbarCategoriesRes } from "../../type"
import { useState } from "react"
import { useAppContext } from "../../context/AppContext"
import { IconsGifts } from "../svg/IconGifts"
import { Loader } from "../loader/Loader"

const getNavBarData = async () => {
    try {
        const { data } = await $api.get("shop/categories")
        return data
    } catch (error) {
        console.error(error)
    }
}

export const Navbar = () => {
    const navigate = useNavigate()
    const { changeCurrentSubCategorie } = useAppContext()

    const [hoveredCategory, setHoveredCategory] = useState<CategoryType | null>(
        null
    )

    const { data, isLoading } = useQuery<NavbarCategoriesRes>(
        "shop/categories",
        getNavBarData,
        {
            staleTime: Infinity,
            cacheTime: 3600 * 24,
        }
    )

    const navToCategories = (e: React.MouseEvent, id: number | undefined) => {
        if (!id) {
            console.error("id is undefinded")
        }
        e.preventDefault()
        navigate(`/catalog/${id}/products`)
    }

    if(isLoading) return <Loader/>

    return (
        <div className="navbar">
            {data
                ?.filter((item) => item.icon)
                .map((item, index) => (
                    <button
                        className="navbar-item"
                        key={index}
                        onClick={() => {
                            changeCurrentSubCategorie(item)
                            navigate('/')
                        } }
                    >
                        <button className="navbar-item-ico" >
                            {/* <ReactSVG src={item?.icon || ''} beforeInjection={(svg) => svg.setAttribute("crossorigin", "anonymous")}
                        /> */}
                            {item?.icon ? (
                                <img src={item.icon} alt="" />
                            ) : (
                                <IconsGifts />
                            )}
                        </button>
                        <p>{item.title}</p>
                    </button>
                ))}

            <div className="navbar-titles">
                <div>
                    {data?.map((item, index) => (
                        <button
                            key={index}
                            className="navbar-titles-item"
                            style={!index ? { borderTop: 0 } : {}}
                            onMouseEnter={() => setHoveredCategory(item)}
                        
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="navbar_products">
                    <div
                        className="catalog-main-list"
                        onMouseLeave={() => setHoveredCategory(null)}
                        onClick={() => setHoveredCategory(null)}
                    >
                        {hoveredCategory?.subcategories.map((item) => (
                            <div
                                className="catalog-main-product navbar_list-item"
                                onClick={(e) =>
                                    navToCategories(e, item?.categoryId)
                                }
                                style={{ backgroundImage: `url(${item.icon})`}}
                            >
                                <div className="catalog-main-product-img">
                                {!item?.icon  &&  <IconsGifts />}
                                </div>
                                <h5 style={item?.icon ? {paddingTop: '300px'} : {}}>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
