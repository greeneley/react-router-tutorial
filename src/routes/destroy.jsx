import { deleteContact } from "../contacts.js";
import { redirect } from "react-router-dom";

export async function action({ params }) {
  throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
