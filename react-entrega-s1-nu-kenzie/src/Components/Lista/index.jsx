import Button from "../Button";
import './style.css';
function Card({listTransactions, transaction, index, setListTransactions}){
    return (
        <li id={index}>
            <div className="container">
                <div className="box__description">
                    <h3 className="description">{transaction.description}</h3>

                </div>
                <div className="box__value">
                    {
                    transaction.value >= 0 ?
                        <p>$ {transaction.value }</p> 
                        :   <p>$ {transaction.value * -1}</p>
                    } 
                </div>
                <div className='box__btn'>
                    <Button description={transaction.description} setListTransactions={setListTransactions} listTransactions={listTransactions} index={index}/>
                </div>
            </div>
            <div className="box__type">
                <span className="type">{transaction.type}</span>
            </div>
        </li>
    );
}
export default Card;