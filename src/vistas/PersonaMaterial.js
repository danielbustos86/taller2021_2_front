import React, { Fragment, useEffect, useState } from 'react'


import { useMediaQuery } from 'react-responsive';
import { Container, Grid, Button, Typography, TextField } from '@material-ui/core';
import MaterialDatatable from 'material-datatable';
import './PersonaMaterial.css';


const PersonaMaterial = () => {
    const [accion, SetAccion] = useState("Guardar")
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const columns = [
        {
            name: "Name",
            field: "name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Company",
            field: "company",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "City",
            field: "city",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "State",
            field: "state",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const data = [
        { name: "Name 1", title: "Title 1", location: "Location 1", age: 30, salary: 10 },
        { name: "Name 2", title: "Title 2", location: "Location 2", age: 31, salary: 11 },
    ];

    const handleRowClick = (rowData, rowMeta) => {
        console.log(rowData.name)
    };
    const options = {
        filterType: 'checkbox',
        onlyOneRowCanBeSelected: true,
        onRowClick: handleRowClick
    };
    return (

        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6">
                        Personas
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} fullWidth>
                    <TextField id="nombre" label="Nombre" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="apellido" label="Apellido" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained" color="primary" fullWidth>{accion}</Button>

                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained" color="secondary" fullWidth
                    >Eliminar</Button>
                </Grid>
            </Grid>

      
            <Grid item xs={12} md={12} className="tabla">
            <MaterialDatatable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
            
        </Grid>
      

        </Container>
    )
}
export default PersonaMaterial