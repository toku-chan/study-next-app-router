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
export default function catchAllDynamicPage({
  params
} : {
  params: {
    slug: string[]
  }
}) {
  console.log(params)
  const { slug } = params;

  if(!slug) {
    notFound();
  }

  return (
    <div>
      <p>あらゆるパターンにマッチするcatch-all dynamicページです</p>
      <p>
        ただし、パラメータがないときのルートにはマッチしません。<br />
        ※ 現状blog/page.tsxが存在しますが、存在しない場合「/blog」にアクセスすると404エラーになります。
      </p>
    </div>
  )
}