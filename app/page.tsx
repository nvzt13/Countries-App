import Form from '../components/Form';
import ListCard from '../components/ListCard'


export default function Home() {
  return (
  <main className="bg-world-image h-full w-full">
    <h1 className="bg-[#000] text-center py-5 text-4xl" >
      Countries App
    </h1>
    <Form />
    <ListCard />
  </main>
    )
}