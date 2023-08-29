'use client';

import React, { useState } from "react";

export default function DashBoardTemplate({children}: {children: React.ReactNode}) {
  const [num, setNum] = useState<number>(0);

  return (
    <section>
      <h2>Template</h2>
      <p>
        dashboard以下の子コンポーネントに全てにtemplateが表示されます。<br />
        しかし、描画時に状態を保存しないので、useStateで更新したcounterは0から再計算となります。
      </p>
      <p>IMO: データの再取得とか、ページごとの計測を行うとか、そういう場面で使えるそう</p>
      <section>
        <h3>templateでは状態を維持せず、再描画される検証</h3>
        <p>ページ間の移動を行うとリセット</p>
        <p>counter: {num}</p>
        <button onClick={() => setNum((pre) => pre + 1)}>CLICK</button>
      </section>
      {children}
    </section>
  )
}