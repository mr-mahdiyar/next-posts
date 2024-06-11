
import { createPost } from '@/actions/posts';
import PostForm from '@/components/post-component';


export default function NewPostPage() {
    return <PostForm action={createPost} />
}
