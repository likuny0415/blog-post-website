export interface ArticleList {
    articles: ArticleType[];
  }
  
  export interface Article {
    article: ArticleType;
  }
  
  export type ArticleType = {
    createdAt: number;
    author: Author;
    description: string;
    title: string;
    body: string;
    slug: string;
    updatedAt: number;
  };
  
  export type Author = {
    username: string;
    bio: string;
    email: string;
    image: string;
  };
  