import styles from './App.module.css';
import powerImage from './assets/powered.png';
import { FormIMC } from './components/FormIMC';

const App = () => {
    return(
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={powerImage} alt=""  width={150}/>
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC</h1>
                    <p>IMC é a sigla para ...</p>
                    <FormIMC />
                </div>
                <div className={styles.rightSide}>
                    
                </div>
            </div>
        </div>
    );
}

export default App;
