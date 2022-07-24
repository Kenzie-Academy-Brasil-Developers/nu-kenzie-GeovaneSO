import './style.css';
function TotalMoney({listTransactions}){
    const totalValue = listTransactions.reduce(function(acc, val){
    
       return acc + val.value
    
      },0);

    return(
        <div className="totalMoney">
            <div className='box__value'>
                <p>Valor Total:</p>
                <p>$ {totalValue},00</p>
            </div>
            <span className='span--value'>O valor se refere ao saldo</span>
        </div>
    );
}

export default TotalMoney;