import { BaskerProduct, ProductType } from "../type"

export const baseURL =
    window.location.host === "localhost:3000"
        ? ""
        : 'https://vladoskin1998.github.io/powergift'

export const normalizeProductTypeToBasketType = (product: ProductType):BaskerProduct => {
    return {
        id: 0,
        product_id: product.id,
        name: product.title,
        image: product.files.images[0],
        images: product.files.images,
        thumbnails: {
          small: '',
          thumb: '',
        },
        quantity: 1,
        price: product.price,
        total: product.price,
    }
}        