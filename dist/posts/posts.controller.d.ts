import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
export default class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): import("./posts.interface").Post[];
    getPostById(id: string): import("./posts.interface").Post;
    createPost(post: CreatePostDto): Promise<{
        content: string;
        title: string;
        id: number;
    }>;
    replacePost(id: string, post: UpdatePostDto): Promise<UpdatePostDto>;
    deletePost(id: string): Promise<void>;
}
