import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Posts, PostsStateModel } from './posts.model';
import { AddPost, RemovePost } from './posts.actions';
import { Injectable } from '@angular/core';

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    listPosts: []
  }
})

@Injectable()
export class PostsState {
  @Selector()
  static getPosts(state: PostsStateModel): Posts[] { return state.listPosts; }

  // Añade un nuevo post al estado
  @Action(AddPost)
  add({ getState, patchState }: StateContext<PostsStateModel>, { payload }: AddPost) {
    const state = getState();
    patchState({
      listPosts: [...state.listPosts, payload]
    });
  }

  // Elimina un post del estado
  @Action(RemovePost)
  remove({ getState, patchState }: StateContext<PostsStateModel>, { payload }: RemovePost) {
    patchState({
      listPosts: getState().listPosts.filter(post => post.id !== payload)
    });
  }
}