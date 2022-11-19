// 404.js
import Link from "next/link"
import Error404 from "../components/Error404"

export default function FourOhFour() {
  return (
    <>
      <Link href="/">
        <Error404 />
      </Link>
    </>
  )
}
