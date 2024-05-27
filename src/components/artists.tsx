import Image from 'next/image'

const featuredArtists = [
  { name: 'cherrymint', imageUrl: '/artists/cherrymint.jpg' },
  { name: 'Einwil', imageUrl: '/artists/einwil.jpg' },
  { name: 'Nover', imageUrl: '/artists/Nover.jpg' },
  { name: 'sukii', imageUrl: '/artists/sukii.jpg' },
  { name: 'notKitty', imageUrl: '/artists/notKitty.jpg' },
  { name: 'Oscar Yuan', imageUrl: '/artists/oscaryuan.jpg' },
]

export default function Artists() {
  return (
    <div className="p-4 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-gray-800 text-2xl font-bold mb-6 mt-10">Artists I Collabed with</h2>
      <div className="space-x-6 overflow-x-hidden grid grid-cols-2 lg:grid-cols-6 md:grid-col-3">
        {featuredArtists.map((artist, index) => (
          <div key={index} className="flex-none text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
              <Image
                src={artist.imageUrl}
                alt={artist.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-black mt-4">{artist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
