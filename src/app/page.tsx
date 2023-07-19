export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <main>
      <h1 className="text-3xl text-red-600">Hello world</h1>
    </main>
  )
}
