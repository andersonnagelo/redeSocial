import { Injectable } from '@angular/core'
import { Post } from '../post/post.model'

@Injectable()

export class PostService {
    listaPosts = [
        new Post(1,"Lia Andrade","kkkkkkkk", 0, false),
        new Post(2,"Mia Maia","kkkkkkkk", 0, false)
    ];

    getPosts() {
        return this.listaPosts;
    }

    addPost(post: Post){
        this.listaPosts.push(post);
    }

    removerPost(post:Post){
        let index = this.listaPosts.indexOf(post);
        this.listaPosts.splice(index,1);
          console.log("Funfou!");
    }
    recebeuLike (post:Post, deuLike:boolean) {
        let index = this.listaPosts.indexOf(post);
        if(deuLike){
            this.listaPosts[index].qtdLikes ++;
        }
        // else{
        //     this.listaPosts[index].qtdLikes --;
        // }
      } 
};
