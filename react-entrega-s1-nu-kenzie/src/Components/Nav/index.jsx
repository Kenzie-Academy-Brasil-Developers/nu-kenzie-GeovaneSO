import './style.css';
function Nav({listTransactions, setListTransactions}){

    function filter (){
            const filterListEtrada = listTransactions.filter((transaction) => {
                return  transaction.type === 'Entrada'
            });
            
            return   setListTransactions(filterListEtrada);
    }
      
    function filterDespesa(){
        const filterListEtrada = listTransactions.filter((transaction) => {
            return  transaction.type === 'Despesa'
        });
        
        return   setListTransactions(filterListEtrada);
    }

    function all(){
        console.log(listTransactions)
     return   setListTransactions(listTransactions)
    }
    
    return(
       <div className='box__nav'>
            <h3 className='resumo'>Resumo financeiro</h3>
            <nav>
                <button className='btn__todos' onClick={all}>Todos</button>
                <button className='btn__entradas' onClick={filter}>Entradas</button>
                <button className='btn__despesas' onClick={filterDespesa}>Despesas</button>
            </nav>
      </div>
    )
}
export default Nav;