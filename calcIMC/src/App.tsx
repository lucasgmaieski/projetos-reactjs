import styles from './App.module.css';
import powerImage from './assets/powered.png';
import { useState } from 'react';
import { GridItem } from "./components/GridItem";

import { levels, calculateImc } from "./helpers/imc";

const App = () => {

    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if(heightField && weightField) {

        } else {
            alert("Digite todos os campos");
        }
    }
    return(
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={powerImage} alt=""  width={150}/>
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC.</h1>
                    <p>IMC é a sigla para Indíce de Massa Corpórea, parâmetro adotado pela Organização de Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
                    
                    <input 
                    type="text" 
                    placeholder="Digite a sua altura. Ex 1.5 (em métros)"
                    value={heightField > 0 ? heightField : ''}
                    onChange={e => setHeightField(parseFloat(e.target.value))}
                    
                    />
                    <input 
                    type="text" 
                    placeholder="Digite o seu peso. Ex 75.3 (em kg)"
                    value={weightField > 0 ? weightField : ''}
                    onChange={e => setWeightField(parseFloat(e.target.value))}
                    
                    />

                    <button onClick={handleCalculateButton}>Calcular</button>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.grid}>
                        {levels.map((item, key)=>(
                            <GridItem key={key} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;