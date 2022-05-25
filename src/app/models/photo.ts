export interface ResponsePhotos {
  photos: {
  page: string;
  pages: string;
  perpage: string;
  total: string;
  photo: Array<Photo>;
  }
}

export interface Photo {
  farm: string;
  id: string;
  owner: string;
  secret: string;
  tags: string;
}
