import { useParams } from "react-router-dom"
import { CardDesc } from "./CardDesc"
import { CardDescMobile } from "./CardDescMobile"
import { CardSlick } from "./CardSlick"
import './card.scss'
import { useQuery } from "react-query"
import { $api } from "../../api"
import { ProductType } from "../../type"
import { useBasketStore } from "../../components/basket/basket.store"
import { useEffect, useState } from "react"
import { normalizeProductTypeToBasketType } from "../../utils/utils"
import { CardEndpointApi } from "./card.endpoint"
import { CatalogEndpointApi } from "../catalog/catalog.endpoint"



export default function Card() {
    const [count, setCount] = useState(1)

    const { categoriesId, cardId } = useParams()
    const { addProductBasketList, setOpenBasket, productBasketList } = useBasketStore()

    const { data: product } = useQuery<ProductType>(
        ["shop/products?categoriesId", categoriesId],
        () => CatalogEndpointApi.getProduct(cardId!),
        {
            enabled: !!cardId,
            staleTime: Infinity,
            cacheTime: 3600 * 24 * 10,
        }
    )

    const addToBasket = () => {
        if (product) {
            const basketProduct = normalizeProductTypeToBasketType(product)
            addProductBasketList(
                basketProduct, count
            )
            setCount(1)
            setOpenBasket(true)
        }
    }

    const countBasket = productBasketList.find((item) => item.product_id === product?.id)?.quantity || 0
    const availableCount = product?.available! - countBasket
    const changeCount = (n: number) => {
     debugger
      
        if (count + n > availableCount) {
            return
        }
        setCount((s) => (s + n < 1 ? s : s + n))
    }

    const changeInput = (value: number) => {
      
        if (value > availableCount) {
            setCount(availableCount)
        }
        else{
            setCount(value < 1 ? 1 : value)
        }
        
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
                changeInput={changeInput}
            />
            <CardDescMobile
                changeInput={changeInput}
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
