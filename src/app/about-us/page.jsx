import TeamCard from "../_components/cardComponent/teamCard";
import Culture from "./_components/culture";
import History from "./_components/history";

export default async function About() {
  const res = await fetch("https://randomuser.me/api/?results=2");
  const data = await res.json();
  const teamMemberData = data.results;

  return (
    <main className="w-full">
      <section className="w-full py-4 overflow-hidden">
        <h1 className="my-4 font-bold text-center text-4xl">History</h1>
        <History />
      </section>

      <section className="w-full py-4">
        <h1 className="font-bold text-center text-4xl">Team</h1>
        <div className="w-[75%] m-auto sm:w-full flex justify-evenly px-4 gap-4 flex-col sm:flex-row">
          {teamMemberData.map((e, i) => (
            <TeamCard memberData={e} key={i} />
          ))}
        </div>
      </section>

      <section className="w-full py-4">
        <h1 className="font-bold text-center text-4xl my-4">Culture</h1>
        <Culture />
      </section>
    </main>
  );
}
