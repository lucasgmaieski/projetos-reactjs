import { useState, KeyboardEvent, useContext } from "react";
import * as C from './styles';
import { ListContext } from "../../contexts/ListContext";
import { Item } from "../../types/Item";

export const AddArea = () => {
    const context = useContext(ListContext)

    const list = context?.list ?? [];
    const addItem = (item: Item) => {
        context?.addItem(item);
    }

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            const newItem = {
                id: list.length + 1,
                name: inputText,
                done:false 
            };
            addItem(newItem);
            setInputText('');
        } 
    }
    return (
        <C.Contianer>
            <div className='imagem'>➕</div>
            <input 
                type="text" 
                placeholder='Digite um tarefa' 
                value={inputText} 
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Contianer>
    );
}