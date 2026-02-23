import { redirect } from "next/navigation"

// Kajabi embed script uses document.write() which doesn't work with dynamic loading
// and their server blocks iframe embedding. Redirect to the form directly.
export default function BasicPage() {
  redirect("https://medlem.smest.no/forms/2149400937")
}
