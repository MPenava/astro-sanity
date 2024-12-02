export interface PostItem {
  name: string;
  slug: string;
  content: any;
  image: ImageMetadata;
  date: string;
  author: string;
  category: string;
  featured: boolean;
  tags: string[];
}
