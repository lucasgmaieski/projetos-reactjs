import * as C from './App.styles';
import { useState, useContext } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { ListContext } from './contexts/ListContext';

function App() {
    // const [list, setList] = useState<Item[]>([
    //     { id: 1, name: 'Comprar pão de queijo na padaria', done: false },
    //     { id: 2, name: 'Comprar brigadeiro na padaria', done: false },
    // ]);
    const context = useContext(ListContext)

    const list = context?.list ?? [];
    const addItem = (item: Item) => {
        context?.addItem(item);
    }
    
    return (
        <C.Container>
            <C.Area>
                <C.Header> Lista de Tarefas</C.Header>

                <AddArea />
                
                {list.map((item, index) => (
                    <ListItem key={index} item={item}/>
                ))}

            </C.Area>
        </C.Container>
    )
}

export default App
