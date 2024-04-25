import Image from 'next/image'

export default function TeamCard({memberData}) {
    const name = memberData.name.first + " " + memberData.name.last;
    const imgUrl = memberData.picture.large;
    const phone = memberData.phone
  return (
    <div className="w-full rounded-md border-black border-2 text-center">
        <div className="w-[50%] m-auto aspect-square relative">
            <Image src={imgUrl} alt='Komok Member' fill/>
        </div>
        <div className='py-2'>
            <h1 className='font-bold'>{name}</h1>
            <h1>{phone}</h1>
        </div>
    </div>
  )
}
