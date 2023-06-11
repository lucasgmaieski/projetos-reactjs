import * as C from "./App.styles";
import { useState, useEffect } from 'react'
import bgMain from './assets/bg.svg'
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
function App() {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilteredList( filterListByMonth(list, currentMonth));
    }, [list, currentMonth])

    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>
                    ...{currentMonth}
                </C.HeaderText>
            </C.Header>
            <C.Body>
                <InfoArea />

                <TableArea list={filteredList}/>
            </C.Body>
        </C.Container>
    )
}

export default App
