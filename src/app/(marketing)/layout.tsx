import React from "react";
import Link from "next/link";

export default function MarketingLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>
        <h1>marketingグループが持つLayout</h1>
        <p>
          marketingディレクトリで作成したlayout.tsx<br />
          marketingはルートグループとして存在しているため、<Link href="/marketing">/marketing</Link>というURLは404エラーとなる
        </p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}