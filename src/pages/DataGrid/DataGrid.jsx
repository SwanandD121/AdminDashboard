import React from 'react'
import './DataGrid.css'
import MaterialReactTable from "material-react-table";
import { useMemo } from 'react';
import { userData } from '../../data';
import { createTheme, darken, ThemeProvider } from '@mui/material/styles';
// import { data } from './data';
// import { darken } from '@mui/material';

const DataGrid = () => {

{/* <MaterialReactTable
  columns={columns}
  data={data}
  muiTableBodyProps={{
    sx: {
      //stripe the rows, make odd rows a darker color
      '& td:nth-of-type(odd)': {
        backgroundColor: '#f5f5f5',
      },
    },
  }}
  muiTableBodyCellProps={{
    sx: {
      borderRight: '2px solid #e0e0e0', //add a border between columns
    },
  }}
/> */}


    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: 'FirstName',
        },
        {
            accessorKey: "name.lastName",
            header: 'LastName',
        },
        {
            accessorKey: "address",
            header: 'Address',
        },
        {
            accessorKey: "city",
            header: 'City',
        },
        {
            accessorKey: "state",
            header: 'State',
        },
        
    ])

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        })
    )  
    
    

  return (

    <div className='table-container'>
        <ThemeProvider theme={theme}>
            <MaterialReactTable
              columns={columns}
              data={userData}
              muiTablePaperProps={{
                elevation: 0,
                sx: {
                  borderRadius: '3px',
                  border: '2px solid #e0e0e0',
                },
              }}
              muiTableBodyProps={{
                sx: (theme) => ({
                  '& tr:nth-of-type(odd)': {
                    backgroundColor: darken(theme.palette.background.default, 0.1),
                  },
                }),
              }}
            />
        </ThemeProvider>
    </div>

    // <div className="table-container">
    //     <ThemeProvider theme={theme}>
    //         <MaterialReactTable columns = {columns} data={userData}/>
    //     </ThemeProvider>
    // </div>

    

  )


}

export default DataGrid
