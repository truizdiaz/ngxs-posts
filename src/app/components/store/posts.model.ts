export class PostsStateModel {
  public listPosts!: Posts[];    
  }
  export interface Posts {
    id: string;
    text: string;
  }