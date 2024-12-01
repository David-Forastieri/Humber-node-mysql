export function validateData(req, res, next) {
    const { idLoad, patente, idTrucker } = req.params

    if (!idLoad || !patente || !idTrucker) {
        return res.status(400).json({ error: 'Faltan datos requeridos' })
    }

    if (isNaN(idLoad) || isNaN(idTrucker)) {
        return res.status(400).json({ error: 'idLoad y idTrucker deben ser numeros' })
    }

    next()
}
