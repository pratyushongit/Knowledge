import Folder, { TFolderProp } from "./Folder/Folder";

const folders: TFolderProp[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Comedy",
            folders: [
              { name: "2000s", folders: [] },
              { name: "2010s", folders: [] },
            ],
          },
          { name: "Drama", folders: [] },
        ],
      },
      {
        name: "Music",
        folders: [
          { name: "Rock", folders: [] },
          { name: "Classical", folders: [] },
          { name: "Hardrock.mp4" },
        ],
      },
      { name: "Pictures", folders: [] },
      { name: "passwords.txt" },
    ],
  },
];

const Home = () => {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul className="ml-6">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
