const date = new Date()

let dia = date.getDate();
let mes = date.getMonth() + 1;
let ano = date.getFullYear();

dia = dia < 10 ? dia = `0${dia}` : dia
mes = mes < 10 ? dia = `0${mes}` : mes

const dateAtual = `${dia}/${mes}/${ano}`

const COLUMN_WIDTHS = {
    ID: '70px',
    TAREFA: '300px',
    DATA_LIMITE: '10%',
    DATA_CONCLUSAO: '180px',
    ACTION: '180px',
};

const paginationComponentOptions = {
    rowsPerPageText: 'Linhas por página:',
    rangeSeparatorText: 'de',
    noRowsPerPage: false, // Hides the 'rows per page' dropdown
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
};

const customStyles = {
    headCells: {
        style: {
            
            fontWeight: '800',
            justifyContent: 'center'
        },
    },
    pagination: {
        style: {
            borderTop: '1px solid #e0e0e0',
            justifyContent: 'center',
            color: '#000',
            fontWeight: '700'
        },
        pageButtonsStyle: {
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            padding: '8px',
            margin: '10px 2px',
            cursor: 'pointer',
            transition: '0.4s',
            color: '#FFF',
            fill: '#FFF',
            backgroundColor: '#2aa198',
            '&:hover:not(:disabled)': {
                backgroundColor: '#2aa19880',
            },
            '&:focus': {
                outline: 'none',
                backgroundColor: '#2aa19880',
            },
            '&:disabled': {
                cursor: 'unset',
                color: '#888',
                fill: '#ffffff40',
            },
        },
        paginationText: {
                color: '#000'
        },
    },
    header: {
        style: {
            backgroundColor: 'transparent',
            color: '#000',
            fontSize: '24px',
            fontWeight: '900',
            textAlign: 'center',
            paddingBlock: '10px',
        },
    },
};

export {dateAtual, COLUMN_WIDTHS, customStyles, paginationComponentOptions}

