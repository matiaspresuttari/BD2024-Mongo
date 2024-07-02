// app.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// Construir la URL de conexión a partir de las variables de entorno
const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

// Crear una nueva instancia de MongoClient
const client = new MongoClient(url);

async function main() {
    try {
        // Conectar al servidor MongoDB
        await client.connect();
        console.log('Conectado correctamente al servidor');

        // Seleccionar la base de datos
        const db = client.db();

        // Modificar colección tipoUva
        const tipoUva = db.collection('tipoUva');

        const nuevosDocumentos = [
            { _id: 1, nombre: 'Cabernet Sauvignon' },
            { _id: 2, nombre: 'Chardonnay' },
            { _id: 3, nombre: 'Merlot' },
            { _id: 4, nombre: 'Sauvignon Blanc' },
            { _id: 5, nombre: 'Pinot Noir' },
            { _id: 6, nombre: 'Riesling' },
            { _id: 7, nombre: 'Syrah' },
            { _id: 8, nombre: 'Malbec' },
            { _id: 9, nombre: 'Gewürztraminer' },
            { _id: 10, nombre: 'Zinfandel' }
        ];

        const result = await tipoUva.insertMany(nuevosDocumentos);
        console.log('Documentos insertados en tipoUva con éxito:', result.insertedIds);


        // Modificar colección regionVitivinicola
        const regionVitivinicola = db.collection('regionVitivinicola');

        const nombresRegiones = [
            { _id: 11, nombre: 'Bordeaux' },
            { _id: 12, nombre: 'Napa Valley' },
            { _id: 13, nombre: 'Barossa Valley' },
            { _id: 14, nombre: 'Toscana' },
            { _id: 15, nombre: 'Maipo Valley' },
            { _id: 16, nombre: 'Mosel' },
            { _id: 17, nombre: 'Willamette Valley' },
            { _id: 18, nombre: 'Marlborough' },
            { _id: 19, nombre: 'Rioja' },
            { _id: 20, nombre: 'Hunter Valley' }
        ];

        const result1 = await regionVitivinicola.insertMany(nombresRegiones);
        console.log('Documentos insertados en regionVitivinicola con éxito:', result1.insertedIds);


        // Modificar colección varietal
        const varietal = db.collection('varietal');

        const documentosVariedad = [
            {
                porcentaje_composicion: 75,
                descripcion: 'Vino tinto robusto con notas de grosella negra y cedro.',
                tipo_uva: 1,
                region_vitivinicola: 11
            },
            {
                porcentaje_composicion: 100,
                descripcion: 'Vino blanco con aromas a frutas tropicales y mantequilla.',
                tipo_uva: 2,
                region_vitivinicola: 12
            },
            {
                porcentaje_composicion: 80,
                descripcion: 'Vino tinto suave con sabores a ciruela y hierbas.',
                tipo_uva: 3,
                region_vitivinicola: 13
            },
            {
                porcentaje_composicion: 90,
                descripcion: 'Vino blanco fresco con notas cítricas y herbales.',
                tipo_uva: 4,
                region_vitivinicola: 18
            },
            {
                porcentaje_composicion: 85,
                descripcion: 'Vino tinto elegante con aromas a cereza y especias.',
                tipo_uva: 5,
                region_vitivinicola: 17
            },
            {
                porcentaje_composicion: 95,
                descripcion: 'Vino blanco semidulce con notas a melocotón y lima.',
                tipo_uva: 6,
                region_vitivinicola: 16
            },
            {
                porcentaje_composicion: 85,
                descripcion: 'Vino tinto intenso con sabores a mora y pimienta negra.',
                tipo_uva: 7,
                region_vitivinicola: 15
            },
            {
                porcentaje_composicion: 90,
                descripcion: 'Vino tinto con cuerpo y notas a frutos rojos y violetas.',
                tipo_uva: 8,
                region_vitivinicola: 19
            },
            {
                porcentaje_composicion: 100,
                descripcion: 'Vino blanco aromático con notas a lichi y especias.',
                tipo_uva: 9,
                region_vitivinicola: 20
            },
            {
                porcentaje_composicion: 80,
                descripcion: 'Vino tinto afrutado con sabores a zarzamora y canela.',
                tipo_uva: 10,
                region_vitivinicola: 21
            }
        ];

        const result2 = await varietal.insertMany(documentosVariedad);
        console.log('Documentos insertados en varietal con éxito:', result2.insertedIds);

    } catch (err) {
        console.error('Error al conectar o insertar el documento:', err);
    } finally {
        // Cerrar la conexión al servidor
        await client.close();
    }
}

// Ejecutar la función principal
main().catch(console.error);
