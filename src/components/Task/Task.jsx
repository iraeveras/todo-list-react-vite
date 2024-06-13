import React from "react";
import DataTable , { createTheme } from "react-data-table-component";
import { FiCheckSquare } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { Button } from "../Button/Button";
import api from "../../services/api.js";
import './Task.css';



export const Task = () => {

    const columns = [
        
        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
            width: '70px',
            text: "center"
        },
        {
            name: "TAREFA",
            selector: row => row.task,
            width: '30%',
            sortable: true,
        },
        {
            name: "DATA LIMITE",
            selector: row => row.date_conpletion,
            width: '125px',
            sortable: true
        },
        {
            name: "DATA DE CONCLUSÃO",
            selector: row => row.create_date_task,
            width: '180px',
            sortable: true
        },
        {
            name: "CONCLUIR",
            cell: () => (
                <Button >
                    <FiCheckSquare />
                </Button>
            ),
            width: '95px',
            
        },
        {
            name: "EDITAR",
            cell: () => (
                <Button >
                    <FiEdit />
                </Button>
            ),
            width: '80px',
            
        },
        {
            name: "EXCLUIR",
            cell: () => (
                <Button >
                    <FiXSquare />
                </Button>
            ),
            width: '85px',
            
        },
    ];

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
            action: {
                button: 'rgba(0,0,0,.54)',
                hover: 'rgba(0,0,0,.08)',
                disabled: 'rgba(0,0,0,.12)',
            },
        }, 'dark');

    const data = api.map(item => {
        return (

            {
                id: item.id, 
                task: item.task,
                date_conpletion: item.completion_date,
                create_date_task: item.create_date
            }
        )
    })
    
    return (        
        
        <DataTable 
        title="LISTA DE TAREFAS"
        columns={columns} 
        data={data} 
        selectableRows
        onSelectedRowsChange={data => console.log(data)}
        pagination
        fixedHeader
        theme="solarized"
        />
        
    )
}