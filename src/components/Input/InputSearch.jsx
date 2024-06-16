import "./Input.css"

function InputSearch({onSearch}) {
    return (
        <div className="container-search">
            <label htmlFor="input-search">Pesquisar</label>
            <input type="text" placeholder="Pesquisar tarefa..." onChange={(e) => onSearch(e.target.value)} id="input-search"/>                
        </div>
    )
}

export default InputSearch