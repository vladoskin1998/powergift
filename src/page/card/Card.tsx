import { useParams } from "react-router-dom"
import { CardDesc } from "./CardDesc"
import { CardDescMobile } from "./CardDescMobile"
import { CardSlick } from "./CardSlick"
import "./card.scss"
import { useQuery } from "react-query"
import { $api } from "../../api"
import { ProductType } from "../../type"
import { useAppContext } from "../../context/AppContext"
import { useBasketStore } from "../../components/basket/basket.store"
import { useEffect, useState } from "react"
import { normalizeProductTypeToBasketType } from "../../utils/utils"

const getCategoriesData = async (id: string) => {
    try {
        const { data } = await $api.get(`shop/products?categoriesId=${id}`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export default function Card() {
    const [count, setCount] = useState(1)

    const { categoriesId, cardId } = useParams()
    const { addProductBasketList, setOpenBasket } = useBasketStore()

    const { data } = useQuery<ProductType[]>(
        ["shop/products?categoriesId", categoriesId],
        () => getCategoriesData(categoriesId || ""),
        {
            enabled: !!categoriesId,
            staleTime: Infinity,
            cacheTime: 3600 * 24 * 10,
        }
    )

    const product = data?.find((item) => item.id === Number(cardId))

    const addToBasket = () => {
        if (product) {
            const basketProduct =   normalizeProductTypeToBasketType(product)
            addProductBasketList(
                basketProduct, 1
            )
            setCount(1)
            setOpenBasket(true)
        }
    }

    const changeCount = (n: number) => {
        setCount((s) => (s + n < 1 ? s : s + n))
    }

    const color = product?.attributes.find((item) =>
        item.name.toLocaleLowerCase().includes("колір")
    )

    const [currentColor, setCurrentColor] = useState("")

    useEffect(() => {
        if (color) {
            setCurrentColor(color?.properties[0]?.name)
        }
    }, [color])

    console.log("product",product);
    

    return (
        <div className="card">
            <CardSlick product={product} />
            <CardDesc
                product={product}
                addToBasket={addToBasket}
                count={count}
                changeCount={changeCount}
                color={color}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
            />
            <CardDescMobile
                product={product}
                addToBasket={addToBasket}
                count={count}
                changeCount={changeCount}
                color={color}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
            />
        </div>
    )
}
