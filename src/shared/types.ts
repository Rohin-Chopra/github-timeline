export interface IRepositoryOwner {
  html_url: string;
  avatar_url: string;
}

export interface IRepository {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage: string;
  created_at: string;
  owner: IRepositoryOwner;
}
