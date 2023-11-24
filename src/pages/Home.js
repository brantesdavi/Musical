import React from "react";

function App() {
  const tracks = [
    {
    id: 1,
      title: 'Moon',
      artist: 'Kanye West',
      album: 'Donda',
    },
    {
        id: 2,
      title: 'Quem Tem Um Amigo Tem Tudo',
      artist: 'Emicida',
      album: 'AmarElo',
    },
    {
        id: 3,
      title: 'DogTooth',
      artist: 'Tyler, The Creator',
      album: 'CALL ME IF YOU GET LOST',
    },
  ];

  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    
    <main className="px-10">
        <div>
        <div className="flex py-4">
            <div className="bg-black w-250 h-250 rounded-lg"></div>
            <div className="p-8">
                <h1 className="block text-2xl font-bold">Hottest Hip Hop</h1>
                <span className="mt-4"> Got some red stuff you should listen to immediately. Find Your favorites, discover the hottest new beats, and give me a follow</span>
            </div>
        </div>
        </div>
        <table className="w-full ">
            <thead className="">
            <tr className="w-full border-b-2 border-neutral-100 text-neutral-400">
                <th className="p-4">
                    <span className="flex justify-start">Track</span>
                </th>
                <th className="py-4">
                    <span className="flex justify-start">Artist</span>
                </th><th className="py-4">
                    <span className="flex justify-start">Album</span>
                </th>
            </tr>
            </thead>
            <tbody>
            {tracks.map((row) => (
                <tr key={row.id} className="border-b-2 border-neutral-100 hover:bg-red-100 ">
                    <td className="flex items-center gap-x-2 py-2 px-4">
                        <div className="bg-black w-75 h-75 rounded-lg"></div>
                        <span className="text-neutral-950 font-bold">{row.title}</span>
                    </td>
                    <td>{row.artist}</td>
                    <td>{row.album}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </main>
    
  );
}

export default App;
