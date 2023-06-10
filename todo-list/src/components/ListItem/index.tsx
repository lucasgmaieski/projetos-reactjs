import { useState, ChangeEvent, useContext } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import { ListContext } from '../../contexts/ListContext';

type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) => {
    const context = useContext(ListContext)

    const list = context?.list ?? [];

    const [isChecked, setIsChecked] = useState(item.done);

    const hendleCheckItem = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        list.map((element) => {
            if(element.id === item.id)  element.done = !element.done  
        })
        
    }
    return (
        <C.Container done={isChecked.toString()}>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={hendleCheckItem}
            />
            <label>{item.name}- {item.done.toString()}</label>
            
        </C.Container>
    );
}