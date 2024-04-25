import TeamCard from "../_components/cardComponent/teamCard"

export default async function Teams() {
    const res = await fetch ("https://randomuser.me/api/?results=12")
    const data = await res.json();
    const teamMemberData = data.results;
    
  return (
    <>
        <main className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-[20%] sm:px-5 my-4">
            {
                teamMemberData.map((e,i)=><div className="flex items-center justify-center"><TeamCard memberData={e} key={i}/></div>)
                
            }
        </main>
    </>
  )
}
