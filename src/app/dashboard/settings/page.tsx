import Link from "next/link"

export default function Settings() {
  return(
    <section>
      <h2>settingsのpage</h2>
      <p>どんなにディレクトリがネストしても、フォルダ内にpage.tsxが存在すれば、それはページとして機能し、アクセスできる</p>
      <Link
        href={'/dashboard/settings#content03'}
        scroll={false}
      >
        コンテンツ03へはスクロールできない
      </Link>
      <section id="content01">
        <h3>コンテンツ01</h3>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
      </section>
      <section id="content02">
        <h3>コンテンツ02</h3>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
      </section>
      <section id="content03">
        <h3>コンテンツ03</h3>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
        <p>ああああああああああああああああああ</p>
      </section>
    </section>
  )
}