import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemovePost } from '../store/posts.actions';
import { Posts } from '../store/posts.model';
import { PostsState } from '../store/posts.state';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {
  $posts: Observable<Posts[]>

  constructor(private store: Store) {
    this.$posts = this.store.select<Posts[]>(state => state.posts.listPosts)
   }

  ngOnInit(): void {
  }

  removePost(id: any) {
    this.store.dispatch(new RemovePost(id))
  }

}
