import Content from "@/components/content"
import Slideshow from "@/components/slideshow"

export default async function Home() {
  return (
    <main className="mainpage">
      <Slideshow/>
      <Content/>
    </main>
  )
}
