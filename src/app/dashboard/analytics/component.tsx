export function Analytics() {
  return (
    <div>
      <p>page.tsxで作られていない、content.tsxで作成されたAnalyticsはURLとしての役割を持たない</p>
      <p>そのため、「<a href="/dashboard/analytics">/dashboard/analytics</a>」でアクセスしても表示されない</p>
    </div>
  )
}