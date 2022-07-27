import './style.css';
function Nav({listTransactions, setListTransactions, setList}){

    return(
       <div className='box__nav'>
            <h3 className='resumo'>Resumo financeiro</h3>
            <nav>
                <button className='btn__todos' onClick={() => {
                    setList("Todos")
                }}>Todos</button>
                <button className='btn__entradas' onClick={() => {
                    setList('Entrada')
                }}>Entradas</button>
                <button className='btn__despesas' onClick={() => {
                    setList('Despesa')
                }}>Despesas</button>
            </nav>
      </div>
    )
}
export default Nav;