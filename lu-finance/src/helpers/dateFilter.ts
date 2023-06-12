import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
        // se o ano e mes do item baterem com o ano e mês que estão sendo filtrados
        if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() ) === parseInt(month)) {
            newList.push(list[i]);
        }
    }
    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() ;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n<10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    return `${months[parseInt(month) -1]} de ${year}`;
}

export const formatDateInput = (date: string): string => {
    let [year, month, day] = date.split('-');

    return `${year}, ${parseInt(month)+1}, ${parseInt(day)}`;
}