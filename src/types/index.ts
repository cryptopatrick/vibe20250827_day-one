export interface Artwork {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  category: 'recent' | 'popular';
}

export type FilterType = 'all' | 'recent' | 'popular';