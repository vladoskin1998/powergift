import { ProductType } from "../../type"
import { baseURL, normalizeProductTypeToBasketType } from "../../utils/utils"
import { HeaderIconBasket } from "../../components/svg/HeaderIcon"
import { IconsGifts } from "../../components/svg/IconGifts"
import { useBasketStore } from "../../components/basket/basket.store"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../auth/auth.store"

interface CatalogProductItemProps {
    product: ProductType
    onNavToCard: (e: React.MouseEvent, idprod: number | undefined, catid?: number) => void
}

export const CatalogProductItem = ({ product, onNavToCard }: CatalogProductItemProps) => {
    const { addProductBasketList } = useBasketStore()
    const isAuth = useAuthStore(s => s.isAuth)
    const addToBasket = (e: React.MouseEvent, product: ProductType) => {
        e.stopPropagation()
        const basketProduct = normalizeProductTypeToBasketType(product)
        addProductBasketList(basketProduct, 1)
    }

    const navigate = useNavigate()

    return (
        <div
            onClick={(e) => onNavToCard(e, product.id, product?.category?.id)}
            key={product.id}
            className="catalog-filter-list-item"
        >
            <div className="catalog-filter-list-item-img catalog-filter-list-item-gift-ico">
                {product.files.image[0] ? <img src={product.files.image[0]} alt={product.title} /> : <IconsGifts />}
            </div>

            <div className="catalog-filter-list-item-foot">
                <div className="catalog-product-colors">

                    <button className="catalog-product-colors-c" style={{
                        backgroundImage: `url(${product.files.image[0] && product.files.images[0]})`,
                        backgroundBlendMode: 'cover',
                    }} />

                    {product.relatedProductsByColor?.map(
                        (rproduct) => (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    navigate(
                                        `/catalog/${rproduct.category.id}/card/${rproduct.id}`
                                    )
                                }}
                                key={rproduct.id}
                                className="catalog-product-colors-c"
                                style={{
                                    backgroundImage: `url(${rproduct.files.image[0] && rproduct.files.images[0]})`,
                                    backgroundBlendMode: 'cover',
                                }}
                            />
                        )
                    )}
                </div>
           
                <div className="catalog-product-item-thr">
                    <div>
                        <span> Артикул:</span >  <span style={{ marginLeft: '5px' }}><b>{product.id}</b></span>
                    </div>
                    <div>
                        <span>Бренд:</span> <p>{product.category.name}</p>
                    </div>
                </div>
                <h6 className="catalog-filter-list-item-foot-price">{product.title}</h6>
                <p className="catalog-filter-list-item-foot-order">
                    {product.stock > 0 ? 'В наявності' : 'Під замовлення'}
                    <img src={baseURL + '/Images/Basket.png'} alt="Basket" />
                </p>
                <div className="catalog-filter-list-bot basket-pc">
                    <div className="catalog-product-item-bot">
                        <div>
                            <h5>{isAuth ? product.partner_price : product.price}</h5>
                            <span>грн</span>
                        </div>
                        <div className="catalog-product-item-bot-it">
                            {product.stock}
                            <p>в наявності</p>
                        </div>
                        <div className="catalog-product-item-bot-it">
                            {product?.available || product.stock}
                            <p>доступно</p>
                        </div>
                    </div>

                    <button
                        className="catalog-filter-list-item-foot-but basket-pc"
                        onClick={(e) => addToBasket(e, product)}
                    >
                        <div className="catalog-filter-list-item-foot-but-ico basket-pc">
                            <HeaderIconBasket />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}