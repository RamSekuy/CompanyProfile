import TeamCard from "../_components/cardComponent/teamCard";

export default async function Teams() {
  const res = await fetch("https://randomuser.me/api/?results=8");
  const data = await res.json();
  const teamMemberData = data.results;

  return (
    <main className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-[20%] sm:px-5 my-4">
      {teamMemberData.map((e, i) => (
        <div className="flex items-center justify-center" key={i}>
          <TeamCard memberData={e} />
        </div>
      ))}
    </main>
  );
}
