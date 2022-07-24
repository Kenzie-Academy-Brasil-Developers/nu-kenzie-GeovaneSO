import Button from "../Button";
function Card({listTransactions, transaction, index, setListTransactions}){
    return (
        <li id={index}>
            <div>
                <p>{transaction.description}</p>
                <span>{transaction.type}</span>
            </div>
            <div>
                {
                transaction.value >= 0 ?
                    <p>$ {transaction.value }</p> 
                    :   <p>$ {transaction.value * -1}</p>
                } 
            </div>
            <div className='box__btn'>
                <Button description={transaction.description} setListTransactions={setListTransactions} listTransactions={listTransactions} index={index}/>
            </div>
        </li>
    );
}
export default Card;