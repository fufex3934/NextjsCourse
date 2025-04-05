import Image from "next/image";
import Link from "next/link";
import profilePic from '../../public/image1.jpg'
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    <Image
    src={profilePic}
    alt="Picture of the author"
    />
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
    </div>
  );
}
