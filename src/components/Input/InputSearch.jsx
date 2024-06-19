import "./Input.css"

function InputSearch({onSearch}) {
    return (
        <input type="text" placeholder="Pesquisar tarefa..." onChange={(e) => onSearch(e.target.value)}/>
    )
}

export default InputSearch