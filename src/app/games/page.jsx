import GameList from "./_components/gameList";

export default function Games() {
  return (
    <main className="w-full">
      <section className="w-full py-4">
        <h1 className="font-bold text-center text-xl">Game List:</h1>
      </section>

      <section className="w-full py-4 flex items-center flex-col">
        <GameList />
      </section>
    </main>
  );
}
