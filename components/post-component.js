"use client";
import FormSubmit from "@/components/form-submit";
import { useFormState } from "react-dom";

// useFormStatus in doc https://pl.react.dev/reference/react-dom/hooks/useFormState#useformstate
export default function PostForm({ action }) {
  // first output includes inputs data, error or success messages and second output is a potinter to a function that sends form datas to server, update form state and somethings like them.
  const [state, formAction] = useFormState(action, {});
  // first argument is a function that sends request to API for send form data. second is initial state.
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
