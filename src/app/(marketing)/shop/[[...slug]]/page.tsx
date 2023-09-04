import { notFound } from "next/navigation";

type PostType = {
  id: number;
  name: string;
  username: "Bret" | "Antonette" | "Samantha" | "Karianne" | "Kamren" | "Leopoldo_Corkery" | "Elwyn.Skiles" | "Maxime_Nienow" | "Delphine" | "Moriah.Stanton";
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
};

type PostsType = PostType[];

export async function generateStaticParams() {
  // https://jsonplaceholder.typicode.com/
  const posts: PostsType = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

  return posts.map((post: PostType) => ({
    slug: [post.company.name, post.username]
  }))
}
// NOTE: Dynamic Routeを体感するための最小限実装
export default function optionalCatchAllDynamicPage({
  params
} : {
  params: {
    slug: string[]
  }
}) {
  console.log(params)
  const { slug } = params;

  return (
    <div>
      <h1>marketingグループが持つshopページ</h1>
      <p>ルートも含めた、全ての/shop以下のパスにマッチします</p>
      <p>パラメータ: {slug}</p>
    </div>
  )
}