import CreatePostDto from './dto/createPost.dto';
import { Post } from './posts.interface';
import UpdatePostDto from './dto/updatePost.dto';
export default class PostsService {
    private lastPostId;
    private posts;
    getAllPosts(): Post[];
    getPostById(id: number): Post;
    replacePost(id: number, post: UpdatePostDto): UpdatePostDto;
    createPost(post: CreatePostDto): {
        content: string;
        title: string;
        id: number;
    };
    deletePost(id: number): void;
}
