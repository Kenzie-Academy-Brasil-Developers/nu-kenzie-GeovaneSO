import './style.css';
function TotalMoney({listTransactions}){
    const totalValue = listTransactions.reduce(function(acc, val){
    
       return acc + val.value
    
      },0);

    return(
        <div className='box__container--value'>
            <div className="totalMoney">
                <div className='box__value--money'>
                    <h3>Valor Total:</h3>
                    <p className='value'>$ {totalValue},00</p>
                </div>
                <span className='span--value'>O valor se refere ao saldo</span>
            </div>
        </div>
    );
}

export default TotalMoney;