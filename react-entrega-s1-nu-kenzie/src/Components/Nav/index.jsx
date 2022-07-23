function Nav({listTransactions}){
    function Filter (){
        // listTransactions.Filter((transaction) => {
        //     transaction.description === 'Entrada' ?
            

        // })
    }
    return(
       <div className='box__nav'>
            <span>Resumo financeiro</span>
            <nav>
                <button className='btn__todos' onClick={Filter}>Todos</button>
                <button className='btn__entradas'>Entradas</button>
                <button className='btn__despesas'>Despesas</button>
            </nav>
      </div>
    )
}
export default Nav;