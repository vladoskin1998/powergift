export interface CategoryType {
    categoryId: number
    title: string
    description: string | null
    url: string
    icon: string | null
    subcategories: CategoryType[]
}

export type NavbarCategoriesRes = CategoryType[]

export enum LinkNavbarEnum {
    CATEGORIES = "cat",
    SUBCATEGORIES = "sub",
}

export type FilesType = {
    images: string[]
    video: string
    documents: string[]
}

export interface ProductType {
    id: number
    price: string
    partner_price: string
    stock: number
    title: string
    description: string
    feature: string
    category: {
        id: number
        name: string
    }
    meta: {
        title: string
        description: string
    }
    files: FilesType
    characteristics: {
        id: number
        name: string
        properties: {
            id: number
            name: string
        }[]
    }[]
    count?: number

    attributes: Array<{
        id: number
        name: string
        properties: { id: number; name: string; color?: string }[]
    }>
}
