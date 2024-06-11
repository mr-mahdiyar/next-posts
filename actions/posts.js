"use server"

import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export async function createPost(prevState, formData) { // define a form action. It has to be async.
    //"use server" // convert form action to server action
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

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
    await storePost({
        imageUrl: '',
        title,
        content,
        userId: 1
      })
    redirect("/feed")
  }
  