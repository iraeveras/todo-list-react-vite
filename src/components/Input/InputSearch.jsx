import "./Input.css"

function InputSearch() {
    return (
        <div className="container-search">
            <label htmlFor="input-search">Pesquisar</label>
            <input type="text" placeholder="Pesquisar tarefa..." id="input-search"/>                
        </div>
    )
}

export default InputSearch