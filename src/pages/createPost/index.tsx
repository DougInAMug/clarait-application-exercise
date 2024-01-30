import { FormEvent } from "react";

export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // I cannot for the life of me figure out how to natively use the FormData object, so converting to json the way I know how
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch("/api/submitNewPost", {
      method: "POST",
      body: JSON.stringify(formDataObj),
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>title</div>
      <input type="text" name="title" id="title" required />
      <div>body</div>
      <input type="text" name="body" id="body" required />
      <div>author</div>
      <input type="text" name="author" id="author" />
      <button type="submit">Submit</button>
    </form>
  );
}
