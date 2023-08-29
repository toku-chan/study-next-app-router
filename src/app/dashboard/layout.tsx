'use client';

import React, { useState } from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [num, setNum] = useState<number>(0);

  return (
    <section>
      <h1>ルートセグメントに当たるLayoutについて</h1>
      <p>セグメント（/dashboard の部分）で独自にlayoutを定義したい場合は、そのセグメントとなるフォルダ内に定義すること</p>
      <p>定義すると、ネストされたフォルダ全てに定義される</p>
      <p>なので、このlayout.tsxはsettingsでも確認することができる</p>
      <p>ルートで持っていないlayout.tsxはサーバーコンポーネントだけではなく、クライアントコンポーネントとなることもできる</p>
      <section>
        <h3>layoutでは状態を維持することを確認する検証</h3>
        <p>
          サブツリー内でのページ間で状態を維持する<br />
          ここでは、dashboard ⇄ settingsでどれだけ遷移しても状態は維持される
        </p>
        <p>counter: {num}</p>
        <button onClick={() => setNum((pre) => pre + 1)}>CLICK</button>
      </section>
      {children}
    </section>
  )
}
