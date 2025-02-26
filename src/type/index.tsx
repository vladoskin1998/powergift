export interface Category {
    categoryId: number;
    title: string;
    description: string | null;
    url: string;
    icon: string | null;
    subcategories: Category[]; 
  }

export type NavbarCategoriesRes = Category[]


export enum LinkNavbarEnum  {
  CATEGORIES = 'cat',
  SUBCATEGORIES = 'sub',
}