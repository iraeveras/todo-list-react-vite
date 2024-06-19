import React, { useState, useEffect } from "react";
import DataTable , { createTheme } from "react-data-table-component";
import ButtonDone from "../Button/BottonDone.jsx";
import ButtonEdit from "../Button/ButtonEdit.jsx";
import ButtonDelete from "../Button/ButtonDelete.jsx";
import InputSearch from "../Input/InputSearch.jsx";

import { COLUMN_WIDTHS, customStyles, paginationComponentOptions } from "../../variables/constants.js";

import server from "../../services/server.js";
import './Task.css';



// Função para criar o tema
const createCustomTheme = () => {
    createTheme('solarized', {
        text: {
            primary: '#000000',
            secondary: '#2aa198',
        },
        background: {
            default: 'transparent',
        },
        context: {
            background: '#2aa198',
            text: '#FFFFFF',
        },
        divider: {
            default: '#ddd',
        },
        header: {
            fontSize: '18px',
            fontColor: '#333',
            fontWeight: '700',
            backgroundColor: '#f5f5f5',
            height: '56px',
            paddingLeft: '16px',
            paddingRight: '16px',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.05)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');
};

// Função para mapear dados da API
const mapDataFromAPI = (apiData) => {
    return apiData.map(item => ({
        id: item.id, 
        task: item.task,
        date_conpletion: item.completion_date,
        create_date_task: item.create_date,
    }));
};

export const Task = () => {

    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredtasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await server.get('/tasks')
                const mappedData = mapDataFromAPI(response.data)

                setTasks(mappedData)
                setLoading(false)
            }catch (err) {
                console.error("Erro ao buscar as tarefas:", err);
                setLoading(false)
            }
        };

        fetchTasks()
    }, [])

    const hendleSearch = (searchTerm) => {

        

        if (!searchTerm) {
            setFilteredtasks(tasks)
        } else {
            const filtered = tasks.filter(task => 
                task.task.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredtasks(filtered)
        }
    }
    
    createCustomTheme()

    // Definição das Colunas
const columns = [
    {
        name: "ID",
        selector: row => row.id,
        sortable: true,
        width: COLUMN_WIDTHS.ID,
        style: {
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center'
        },
    },
    {
        name: "TAREFA",
        selector: row => row.task,
        sortable: true,
        width: COLUMN_WIDTHS.TAREFA,
        style: {
            justifyContent: 'start'
        },
    },
    {
        name: "DATA LIMITE",
        selector: row => row.date_conpletion,
        sortable: true,
        style: {
            justifyContent: 'center'
        },
    },
    {
        name: "DATA DE CONCLUSÃO",
        selector: row => row.create_date_task,
        sortable: true,
        style: {
            justifyContent: 'center'
        },
    },
    {
        
        name: "AÇOES",
        width: COLUMN_WIDTHS.ACTION,
        style: {
            text: 'center',
            width: '100%'
        },
        cell: () => (
            <div className="btn-group">
                <ButtonDone />
                <ButtonEdit />
                <ButtonDelete />
            </div> 
        ),
        
    },
    
];
    

    // const data = mapDataFromAPI(server)
    
    return (
        <section className="task-section">
            
            <DataTable 
            title="TAREFAS"
            columns={columns} 
            data={filteredTasks} 
            customStyles={customStyles}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            onSelectedRowsChange={tasks => console.log(tasks)}
            fixedHeader
            fixedHeaderScrollHeight="550px"
            theme="solarized"
            progressPending={loading}
            subHeader
            subHeaderComponent={
                <InputSearch onSearch={hendleSearch} />
            }
            subHeaderAlign="right"
            />
        </section>
    )
}