import { useState } from "react";

type UseList<T> = {
  list: T[];
  push: (item: T) => void;
  removeAt: (index: number) => void;
  updateAt: (index: number, newItem: T) => void;
  clear: () => void;
};

export const useList = <T>(initialList: T[] = []): UseList<T> => {
  const [list, setList] = useState<T[]>(initialList);

  const push = (item: T) => setList((prev) => [...prev, item]);
  const removeAt = (index: number) =>
    setList((prev) => prev.filter((_, i) => i !== index));
  const updateAt = (index: number, newItem: T) =>
    setList((prev) => prev.map((item, i) => (i === index ? newItem : item)));
  const clear = () => setList([]);

  return { list, push, removeAt, updateAt, clear };
}