import { useNavigate } from "react-router-dom"
import { baseURL } from "../../utils/utils"
import { HeaderIconSearch } from "../svg/HeaderIcon"
import { ReactSVG } from "react-svg"
import "./navbar.scss"
import { $api } from "../../api"
import { useQuery } from "react-query"
import { Category, NavbarCategoriesRes } from "../../type"
import { useState } from "react"
import { Link } from "react-router-dom"

const getNavBarData = async () => {
    try {
        const {data} = await $api.get("shop/categories")
        return data
    } catch (error) {
        console.error(error)
    }
}

export const Navbar = () => {
    const navigate = useNavigate()
    const [hoveredCategory, setHoveredCategory] = useState<Category | null>(
        null
    )

    const [isShowSubCategories, setIsShowSubCutegories] = useState(false)

    const { data } = useQuery<NavbarCategoriesRes>(
        "shop/categories",
        getNavBarData,
        {
            cacheTime: 3600 * 24,
        }
    )

    const navToCatelog = (e:React.MouseEvent, id:number | undefined) => {
        if(!id){
            console.error('id is undefinded')
        }
        e.preventDefault()
       navigate(`/catalog/products?categoriesId=${id}`)
    }

    return (
        <div className="navbar"  >
            {data
                ?.filter((item) => item.icon)
                .map((item, index) => (
                    <Link to={`/catalog/products?categoriesId=${item.categoryId}`} className="navbar-item" key={index} >
                        <button className="navbar-item-ico">
                            {/* <ReactSVG src={item?.icon || ''} beforeInjection={(svg) => svg.setAttribute("crossorigin", "anonymous")}
                        /> */}
                            <img src={item?.icon || ""} alt="" />
                        </button>
                        <p >{item.title}</p>
                    </Link>
                ))}

            <div className="navbar-titles" >
                <div >
                    {data?.map((item, index) => (
                        <button
                            className="navbar-titles-item"
                            style={!index ? { borderTop: 0 } : {}}
                            onMouseEnter={() => setHoveredCategory(item)}
                            
                            onClick={e => navToCatelog(e, item?.categoryId)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="navbar_products">
                    <div className="catalog-main-list" onMouseLeave={() => setHoveredCategory(null)} onClick={() => setHoveredCategory(null)}>
                        {hoveredCategory?.subcategories.map((item) => (
                            <div className="catalog-main-product" onClick={(e) => navToCatelog(e, item?.categoryId)}>
                                <div className="catalog-main-product-img">
                                    <img src={item?.icon || ""} alt="" />
                                </div>
                                <h5>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
