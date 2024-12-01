import express from 'express';
import { getConnection } from './database.js';
import { validateData } from './middleware.js';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/shipment/:idLoad/:patente/:idTrucker', validateData, async (req, res) => {
    const { idLoad, patente, idTrucker } = req.params

    const connection = await getConnection()

    try {
        const query = 'INSERT INTO shipments (id_load, patente, id_trucker) VALUES (?, ?, ?)'
        const [ results ] = await connection.execute(query, [ idLoad, patente, idTrucker ])
        res.status(201).json({mensaje: `Shipment creado con exito ${results}` })
    } catch (error) {
        console.log('Error al crear shipment', error)
        return res.status(500).json({error: 'Error interno del servidor'})
    } finally {
        connection.end()
    }
    
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});