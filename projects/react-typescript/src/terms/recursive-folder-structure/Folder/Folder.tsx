import { useState } from "react";

export type TFolderProp = { name: string; folders?: TFolderProp[] };

const Folder = ({ folder }: { folder: TFolderProp }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "⬇️" : "➡️"}
          </button>
        )}
        {folder.folders ? "📁" : "📑"} {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folderItem) => (
            <Folder folder={folderItem} key={folderItem.name} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Folder;
