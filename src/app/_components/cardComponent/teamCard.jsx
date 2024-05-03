import Image from "next/image";

export default function TeamCard({ memberData }) {
  const name = memberData.name.first + " " + memberData.name.last;
  const imgUrl = memberData.picture.large;
  const phone = memberData.phone;
  const tittleList = [
    "Game Designer",
    "Game Artist",
    "Game Programmer",
    "Game Tester",
  ];

  return (
    <div className="w-full flex justify-center text-center">
      <div className="w-[80%] min-w-[200px] rounded-lg border-black shadow-md border-2 overflow-hidden">
        <div className="w-full m-auto aspect-square relative">
          <Image src={imgUrl} alt="Komok Member" fill sizes="100%" />
        </div>
        <div className="py-2 overflow-hidden text-ellipsis text-nowrap px-2 text-xs bg-white border-t-2 border-black md:text-lg *:text-ellipsis">
          <h1 className="font-bold my-1">{name}</h1>
          <h1 className="">Phone: {phone}</h1>
          <h1>
            Tittle: {tittleList[Math.floor(Math.random() * tittleList.length)]}
          </h1>
          <h1>Experience: {Math.ceil(Math.random() * 5 + 2)} Years</h1>
        </div>
      </div>
    </div>
  );
}
