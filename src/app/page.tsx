import { sql } from "@vercel/postgres"

export default async function Home() {
  const { rows } = await sql`SELECT * FROM Pets`

  return (
    <main>
      <h1 className="font-bold text-5xl tracking-tighter">
        Next.js + Postgres
      </h1>
      <p className="mt-8">
        This page dynamically renders the result of{" "}
        <code className="bg-slate-100 rounded-md p-2">SELECT * FROM Pets;</code>
      </p>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {rows.map((row) => (
          <div className="border p-4 rounded" key={row.name}>
            <p>Name: {row.name}</p>
            <p>Owner: {row.owner}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
