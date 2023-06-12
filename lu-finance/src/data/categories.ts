import { Category } from "../types/Category";

export const categories: Category = {
    food: {title: 'Alimentação', color: 'blue', expense: true},
    rent: {title: 'Aluguel', color: 'brown', expense: true},
    any: {title: 'Qualquer', color: 'gray', expense: true},
    salary: {title: 'Salário', color: 'green', expense: false}
}