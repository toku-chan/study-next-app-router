export default function Home() {
  return (
    <section>
      <h1>Pageについての説明</h1>
      <p>page.tsxからComponentsをexportすることでページとして定義することができる</p>
      <ul>
        <li>ページを定義するときは、export defaultにすること</li>
        <li>page.tsxは常にルート、サブツリーのリーフに当たる</li>
        <li>pageの拡張子は、.js, .ts, .jsx, .tsxが使える</li>
        <li>デフォルトはサーバーコンポーネント。ただしクライアントに変えることもできる</li>
        <li>page内でデータの取得が行える</li>
      </ul>
    </section>
  )
}
