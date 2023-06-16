import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() =>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [])
    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step2');
        } else {
            alert("Preencha os dados");
        }
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
                <p>Passo 2/3</p>
                <h1>Vamo começas com seu nome</h1>
                <p>Preencha o campi abaixo com seu nome completo.</p>

                <hr />
                
                

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}