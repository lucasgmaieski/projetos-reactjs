import { categories } from '../../data/categories';
import { formatDateInput } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';
import { useState } from 'react';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {
    const [dateInput, setDateInput] = useState('');
    const [categoryInput, setCategoryInput] = useState('any');
    const [titleInput, setTitleInput] = useState('');
    const [valueInput, setValueInput] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if(isNaN(new Date(dateInput).getTime())) {
          errors.push('Data inválida!');
        }
        if(!categoryKeys.includes(categoryInput)) {
          errors.push('Categoria inválida!');
        }
        if(titleInput === '') {
          errors.push('Título vazio!');
        }
        if(valueInput <= 0) {
          errors.push('Valor inválido!');
        }
    
        if(errors.length > 0) {
          alert(errors.join("\n"));
        } else {
            onAdd({
                date: new Date(formatDateInput(dateInput)),
                category: categoryInput ?? 'any',
                title: titleInput,
                value: valueInput,
            });
        }
        clearInputs();
    }

    const clearInputs = () => {
        setDateInput('');
        setCategoryInput('');
        setTitleInput('');
        setValueInput(0);
    }

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date" value={dateInput} onChange={e=> setDateInput(e.target.value)}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select name="" value={categoryInput} onChange={e=> setCategoryInput(e.currentTarget.value)}>
                <>
                    <option></option>
                    {categoryKeys.map((key, index) => (
                        <option key={index} value={key}>{categories[key].title}</option>
                    ))}
                </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input type="text" value={titleInput} onChange={e=> setTitleInput(e.target.value)}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type="number" value={valueInput} onChange={e=> setValueInput(parseFloat(e.target.value))}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    )
}