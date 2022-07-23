import {IoMdTrash} from 'react-icons/io'
// import Card from './Components/Lista';

function Button({listTransactions, index}){
    return(
        <button  className={index} onClick={((event, index) => {
            const splice = listTransactions.splice(1, index);
            const a = event;
            console.log(a)
            // if( event.target.className === 'BUTTON' ){
            // console.log(listTransactions)
 
            // }

                  

        })}>
            <IoMdTrash/>
        </button>

    )
}

export default Button;