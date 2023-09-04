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
    slug: post.username
  }))
}

export default function SingleDynamicPage({
  params
}: {
  params: {
    slug: PostType['username']
  }
}) {
  const { slug } = params;

  if(!slug) {
    notFound();
  }

  return (
    <div>
      <p>このページは「/about/hogehoge」というルートしか許容しないシングル動的ページになります</p>
      <p>npm run devを実行すると、next側でよしなにルートを生成し、ページを作成してくれるらしい</p>
      <p>npm run buildを実行された状態でのページは、よしなにページ生成を行わず、generateStaticParamsから渡されたparamsを利用したページしかなく、それ以外は404エラーページになるはず…</p>
    </div>
  )
}
