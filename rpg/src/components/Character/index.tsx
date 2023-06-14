import { CharacterSides } from '../../types/CharacterSides';
import * as C from './styles';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
}
export const Character = ({x, y, side, name}: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }
    return (
        <C.Container left={x * size} top={y * size} size={size} sidepos={sides[side] ?? 0}>
            <span>{name}</span>
        </C.Container>
    )
}