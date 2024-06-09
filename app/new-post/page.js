
import PostForm from '@/components/post-component';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export default function NewPostPage() {

async function createPost(prevState, formData) { // define a form action. It has to be async.
    "use server" // convert form action to server action
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    })

    let errors = [];
    if(!title || title.trim().length === 0) {
      errors.push("Title is required!...")
    }
    if(!content || content.trim().length === 0) {
      errors.push("content is required!...")
    }
    if(!image) {
      errors.push("Image is required.")
    }
    if(errors.length > 0) {
      // form action must return a something taht represent form state.
      return {errors}
    }
    redirect("/feed")
  }
  
    return <PostForm action={createPost} />
}
