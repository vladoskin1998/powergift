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
    available: number
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



export interface BaskerProduct {
    id: number;
    product_id: number;
    name: string;
    image: string;
    images: string[];
    thumbnails: {
      small: string;
      thumb: string;
    };
    quantity: number;
    price: string;
    total: string;
  }
  
  export interface BaskerResponse {
    success: boolean;
    message: string;
    cart: {
      products: BaskerProduct[];
    };
    total: string;
    meta: any;     
    errors: any;  
  }
  

export  type OrderForm = {
      delivery_method_id: number | null
      delivery_warehouse: string
      delivery_name: string
      delivery_lastname: string
      delivery_phone: string
      delivery_address: string
      delivery_city: string
      delivery_country: string
      delivery_region: string
      comment: string
      order_type: string
  }


export  type ShopInfoRes = {
      company: {
          name: string
          description: string
      }
      contacts: {
          phone: string
          email: string
          address: string
      }
      delivery: {
          methods: {
              method_id: number
              method_name: string
          }[]
          rules: string
      }
      order: {
          types: {
              type: string
              name: string
          }[]
          statuses: {
              type: string
              name: string
          }[]
      }
  }