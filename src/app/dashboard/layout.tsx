export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h1>ルートセグメントに当たるLayoutについて</h1>
      <p>セグメント（/dashboard の部分）で独自にlayoutを定義したい場合は、そのセグメントとなるフォルダ内に定義すること</p>
      <p>定義すると、ネストされたフォルダ全てに定義される</p>
      <p>なので、このlayout.tsxはsettingsでも確認することができる</p>
    </section>
  )
}
