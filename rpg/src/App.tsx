import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

function App() {
    const char = useCharacter('Lucas');
    const char2 = useCharacter('Luan');

    useEffect(() => {
        window.addEventListener('keydown', handlekeyDown);
    }, []);

    const handlekeyDown = (e: KeyboardEvent) => {
        switch(e.code) {
            case 'KeyA':
                char2.moveLeft();
            break;
            case'ArrowLeft':
                char.moveLeft();
            break;
            case 'KeyW':
                char2.moveUp();
            break;
            case 'ArrowUp':
                char.moveUp();
            break;
            case 'KeyD':
                char2.moveRight();
            break;
            case 'ArrowRight':
                char.moveRight();
            break;
            case 'KeyS':
                char2.moveDown();
            break;
            case 'ArrowDown': 
                char.moveDown();
            break;

        }
        console.log("apertou" + e.code);
    }
    return (
        <C.Container>
            <C.Map>
                <Character x={char.x} y={char.y} side={char.side} name={char.name}/>
                <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name}/>
            </C.Map>
        </C.Container>
    )
}

export default App
