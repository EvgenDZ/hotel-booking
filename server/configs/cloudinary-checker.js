import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

export async function checkCloudinaryConnection() {
    try {
        const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.CLOUDINARY_API_KEY;
        const apiSecret = process.env.CLOUDINARY_API_SECRET;

        // Проверка переменных окружения
        if (!cloudName || !apiKey || !apiSecret) {
            const missing = [];
            if (!cloudName) missing.push('CLOUDINARY_CLOUD_NAME');
            if (!apiKey) missing.push('CLOUDINARY_API_KEY');
            if (!apiSecret) missing.push('CLOUDINARY_API_SECRET');
            
            throw new Error(`Отсутствуют переменные окружения: ${missing.join(', ')}`);
        }

        // Конфигурация Cloudinary
        cloudinary.config({
            cloud_name: cloudName,
            api_key: apiKey,
            api_secret: apiSecret,
            secure: true
        });

        console.log('🔍 Проверяем подключение к Cloudinary...');

        // Проверяем подключение через ping
        const pingResult = await cloudinary.api.ping();
        
        if (pingResult.status !== 'ok') {
            throw new Error('API ping не вернул статус ok');
        }

        console.log('✅ Подключение к Cloudinary успешно установлено!');
        console.log(`   Cloud Name: ${cloudName}`);
        console.log(`   API Key: ${apiKey.substring(0, 8)}...`);
        
        return {
            success: true,
            cloudName,
            apiKey: apiKey.substring(0, 8) + '...'
        };

    } catch (error) {
        console.log('❌ Ошибка подключения:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// Если файл запущен напрямую, а не импортирован
if (import.meta.url === `file://${process.argv[1]}`) {
    checkCloudinaryConnection()
        .then(result => {
            if (!result.success) {
                process.exit(1);
            }
        });
}