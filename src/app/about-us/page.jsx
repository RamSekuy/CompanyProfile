import TeamCard from "../_components/cardComponent/teamCard"

export default async function About() {
    const res = await fetch ("https://randomuser.me/api/?results=3")
    const data = await res.json();
    const teamMemberData = data.results;
    
  return (
    <main className='w-full'>
        <section className='w-full py-4'>
            <h1 className='my-4 font-bold text-center text-xl'>History</h1>
            {
                [2024,2200,2400,2600,2800,3000].map((e,i)=><div className="w-full px-10 py-2" key={i}>
                    <h1 className="font-semibold">{e}</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores ullam architecto, eum cupiditate nemo quas veniam neque id asperiores vero hic eveniet, sequi possimus aspernatur reprehenderit impedit numquam magnam.</h2>
                </div>)
            }
        </section>

        <section className='w-full py-4'>
            <h1 className='font-bold text-center text-xl'>Team</h1>
            <div className="w-[75%] m-auto sm:w-full flex justify-evenly px-4 gap-4 flex-col sm:flex-row">
                {
                    teamMemberData.map((e,i)=><TeamCard memberData={e} key={i}/>)
                }
            </div>
        </section>

        <section className='w-full py-4'>
            <h1 className='font-bold text-center text-xl'>Culture</h1>
            <h1 className="font-semibold text-lg my-4 text-center">Free to do anything</h1>
        </section>
    </main>
  )
}
