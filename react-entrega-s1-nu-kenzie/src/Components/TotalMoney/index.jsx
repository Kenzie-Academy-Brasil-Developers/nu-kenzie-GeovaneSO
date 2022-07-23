function TotalMoney({listTransactions}){
    const totalValue = listTransactions.reduce(function(acc, val){
    
       return acc + val.value
    
      },0);

    return(
        <div className="totaMoney">
            <div>
                <p>Valor Total:</p>
                <p>$ {totalValue},00</p>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    );
}

export default TotalMoney;