import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './styles';
import { ChangeEvent } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    const handleNextStep = () => {
        navigate('/step2');
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3 {state.currentStep}</p>
                <h1>Vamo começas com seu nome</h1>
                <p>Preencha o campi abaixo com seu nome completo.</p>

                <hr />
                <label>
                    Seu nome completo
                    <input type="text" autoFocus value={state.name} onChange={handleNameChange}/>
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}