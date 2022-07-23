import { useState } from 'react';
import React from 'react';
import './style.css';
function Form({listTransactions, setListTransactions}){
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('Entrada');

    function handleSubmit(){
        type === 'Entrada' ?
        setListTransactions([
            ...listTransactions,
            {
                description: description,
                value: Number(value),
                type: type,
            },
        ]) : setListTransactions([
            ...listTransactions,
            {
                description: description,
                value: Number(value) * -1,
                type: type,
            },
        ]);        
    }
//a função handleSubmit é utilizada para que toda vez que o formulário for enviado
//seja possível capturar as informações dos inputs, como está usando um form, a 
//a ação não fica para o botão, e sim para o formulário, onde, toda vez q houver
//um submit o formulário seja chamado, colocando o onSubmit, o parametro
//oldTransactions são os ojetos que ja existiam na listTransactions, usando o
//spred operator é possível pegar esses valores antigos, dentro da setList tem uma
//callback que pode utilizar
    return(
        <div className="box__form">
            <form >
                <div className="box__input">
                    <label htmlFor="description">Decrição</label>
                    <input 
                    placeholder="Digte aqui sua descrição" 
                    type="text" 
                    name="description" 
                    id="edscripition"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}/>

                    <span>Ex: Compra de roupas</span>
                </div>
                <div>
                    <div className="box__valor">
                        <span>Valor</span>
                        <div>
                            <input 
                            type="text" 
                            name="" 
                            id="" 
                            value={value}
                            onChange={(event) => setValue(event.target.value)}/>
                            R$
                        </div>
                    </div>
                    <div className="box__tipo--valor">
                        <span>Tipo de valor</span>
                        <select 
                        name="type" 
                        id="type"
                        onChange={(event) => setType(event.target.value)}>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>
                </div>
                <button type="button"onClick={() => handleSubmit()}>Inserir Valor</button>
            </form>
        </div>
   )
}
export default Form;