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
  server: string;
  tags: string;
  url_m: string;
}

export interface FBRespAfterFuncAddPhoto {
  name: string;
}

export interface FBRespAfterFuncShowFavPhotos{
  urlPhoto: string;
  titlePhoto: string;
}
