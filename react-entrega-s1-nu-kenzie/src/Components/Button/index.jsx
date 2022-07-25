import {IoMdTrash} from 'react-icons/io';
import './style.css';

function Button({listTransactions, setListTransactions, index, description}){
    return(
        <button id='btn--list' value={description} onClick={((event, index) => {

            const valueButton = event.currentTarget.value;

            const filter = listTransactions.filter((transaction) =>
                transaction.description !== valueButton
            );

            setListTransactions(filter)           
        })}>
            <IoMdTrash/>
        </button>
    )
}

export default Button;