import {
  FC,
  useMemo,
  useCallback,
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface DataContextType {
  selectedId: null | number;
  setSelectedId: Dispatch<SetStateAction<null | number>>;

  items: IItem[];
  getItems: () => Promise<void>;
  isGetItemsLoading: boolean;

  itemData: IItem | null;
  getItemById: (id: number) => Promise<void>;
  isGetItemsByIdLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isGetItemsLoading, setIsGetItemsLoading] = useState(true);
  const [items, setItems] = useState<IItem[]>([]);
  const [isGetItemsByIdLoading, setIsGetItemsByIdLoading] = useState(false);
  const [itemData, setItemData] = useState<IItem | null>(null);

  const getItems = useCallback(async () => {
    setIsGetItemsLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data: IItem[] = await res.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsGetItemsLoading(false);
    }
  }, []);

  const getItemById = useCallback(async (id: number) => {
    setIsGetItemsByIdLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const data: IItem = await res.json();
      setItemData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsGetItemsByIdLoading(false);
    }
  }, []);

  const value: DataContextType = useMemo(
    () => ({
      selectedId,
      setSelectedId,

      items,
      getItems,
      isGetItemsLoading,

      itemData,
      getItemById,
      isGetItemsByIdLoading,
    }),
    [
      selectedId,
      setSelectedId,

      items,
      getItems,
      isGetItemsLoading,

      itemData,
      getItemById,
      isGetItemsByIdLoading,
    ],
  );
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("DataContext should be used inside DataContextProvider");
  }
  return context;
};
