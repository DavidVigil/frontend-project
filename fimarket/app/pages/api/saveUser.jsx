import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
        }

        try {
            const filePath = path.join(process.cwd(), 'data', 'users.json');
            console.log('Ruta del archivo:', filePath); // Verify route 

            const dirPath = path.dirname(filePath);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
            
            let data = []; // If file does not exist, create a JSON file
            if (fs.existsSync(filePath)) {
                const fileContent = fs.readFileSync(filePath, 'utf8');
                data = fileContent ? JSON.parse(fileContent) : [];
            } else {
                fs.writeFileSync(filePath, JSON.stringify([]));
            }
            
            data.push({ email, password }); // Add new user
            
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Read data 

            res.status(200).json({ message: 'Usuario guardado exitosamente' });
        } catch (error) {
            console.error('Error al guardar usuario:', error);
            res.status(500).json({ message: 'Error al guardar el usuario' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
