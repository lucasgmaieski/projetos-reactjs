import React, { createContext, useState } from "react";
import { Item } from "../types/Item";

type ListContextType = {
    list: Item[];
    addItem: (item: Item) => void;
}

export const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ({children}: React.PropsWithChildren) => {
    const [list, setList] = useState<Item[]>([
        {
            id: 1,
            name: 'Comprar Pão de queijo na padaria',
            done: false,
        },
        {
            id: 2,
            name: 'Comprar brigadeiro na padaria',
            done: false,
        },
    ]);

    const addItem = (item: Item) => {
        setList((prevList) => [...prevList, item]);
    }

    const contextValue: ListContextType = {
        list, 
        addItem,
    };

    return (
        <ListContext.Provider value={contextValue}> 
            {children}
        </ListContext.Provider>
    );
}