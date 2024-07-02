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

        // Modificar colección varietal
        const varietal = db.collection('varietal');

        const documentosVariedad = [
            {
                porcentaje_composicion: 75,
                descripcion: "Vino tinto robusto con notas de grosella negra y cedro.",
                tipo_uva: "Cabernet Sauvignon",
                region_vitivinicola: "Bordeaux"
            },
            {
                porcentaje_composicion: 100,
                descripcion: "Vino blanco con aromas a frutas tropicales y mantequilla.",
                tipo_uva: "Chardonnay",
                region_vitivinicola: "Burgundy"
            },
            {
                porcentaje_composicion: 80,
                descripcion: "Vino tinto suave con sabores a ciruela y hierbas.",
                tipo_uva: "Merlot",
                region_vitivinicola: "Napa Valley"
            },
            {
                porcentaje_composicion: 90,
                descripcion: "Vino blanco fresco con notas cítricas y herbales.",
                tipo_uva: "Sauvignon Blanc",
                region_vitivinicola: "Marlborough"
            },
            {
                porcentaje_composicion: 85,
                descripcion: "Vino tinto elegante con aromas a cereza y especias.",
                tipo_uva: "Pinot Noir",
                region_vitivinicola: "Oregon"
            },
            {
                porcentaje_composicion: 95,
                descripcion: "Vino blanco semidulce con notas a melocotón y lima.",
                tipo_uva: "Riesling",
                region_vitivinicola: "Mosel"
            },
            {
                porcentaje_composicion: 85,
                descripcion: "Vino tinto intenso con sabores a mora y pimienta negra.",
                tipo_uva: "Syrah",
                region_vitivinicola: "Rhône Valley"
            },
            {
                porcentaje_composicion: 90,
                descripcion: "Vino tinto con cuerpo y notas a frutos rojos y violetas.",
                tipo_uva: "Malbec",
                region_vitivinicola: "Mendoza"
            },
            {
                porcentaje_composicion: 100,
                descripcion: "Vino blanco aromático con notas a lichi y especias.",
                tipo_uva: "Gewürztraminer",
                region_vitivinicola: "Alsace"
            },
            {
                porcentaje_composicion: 80,
                descripcion: "Vino tinto afrutado con sabores a zarzamora y canela.",
                tipo_uva: "Zinfandel",
                region_vitivinicola: "Sonoma"
            }            
        ];

        const result = await varietal.insertMany(documentosVariedad);
        console.log('Documentos insertados en varietal con éxito:', result.insertedIds);

    } catch (err) {
        console.error('Error al conectar o insertar el documento:', err);
    } finally {
        // Cerrar la conexión al servidor
        await client.close();
    }
}

// Ejecutar la función principal
main().catch(console.error);
