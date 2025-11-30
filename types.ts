export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  isVeg: boolean;
  category: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  MENU = '/menu',
  GALLERY = '/gallery',
  CONTACT = '/contact'
}