import mysql from 'mysql2/promise'

const configDatabase = {
    host: 'challenge-database.czhidwuuklzd.sa-east-1.rds.amazonaws.com',
    port: 3318,
    user: 'davidforastieri',
    password: 'davidHumbe'
}

export async function getConnection() {
    try {
      const connection = await mysql.createConnection(configDatabase)
      console.log('Conexion exitosa a la base de datos')
      return connection
    } catch (err) {
      console.error('Error al conectar a la base de datos: ', err.stack)
      throw err
    }
}
