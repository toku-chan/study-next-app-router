import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Next.js AppRouter',
  description: 'AppRouterについて、深く学ぶ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <main>
          <section>
            <h1>各種検証用のリンク</h1>
            <ul>
              <li>
                <Link href="/">ルートページ</Link>
              </li>
              <li>
                <Link href="/dashboard">dashboardページ</Link>
              </li>
              <li>
                <Link href="/dashboard/analytics">analyticsページ</Link>（※ 404エラーページになります）
              </li>
              <li>
                <Link href="/dashboard/settings">settingsページ</Link>
              </li>
            </ul>
          </section>
          <section>
            <h1>Root Layoutについて</h1>
            <p>トップレベルで定義されたLayoutは全てのルートに適用される</p>
            <ul>
              <li>appディレクトリ内にはlayout.tsxは必須</li>
              <li>layout.tsxは必ず子コンポーネントを持つため、childrenを必ず定義する必要がある</li>
              <li>ルートのlayout.tsx内にはhtml, bodyを定義する必要がある</li>
              <li>SEOもサポート。head要素のMetadataやTitleを管理することができる</li>
              <li>ルートのレイアウトはサーバーコンポーネント。クライアントの設定はできない</li>
            </ul>
            <p>IMO: layoutはネストされているフォルダ全てに影響与えるため、SEOやstyleリセットなど固有ではないものを持つようにした方が良さそう</p>
          </section>
          {children}
        </main>
      </body>
    </html>
  )
}
