// utils/emailVerifier.js
import nodemailer from 'nodemailer';

export const verifySMTPConnection = async (smtpConfig = null) => {
    try {
        const config = smtpConfig || {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        };

        // Создаем транспортер
        const transporters = nodemailer.createTransport(config)
        
        // Проверяем подключение
        await transporters.verify();
        
        console.log('✅ SMTP connection verified successfully');
        return { 
            success: true, 
            message: 'SMTP connection is working properly' 
        };
        
    } catch (error) {
        console.error('❌ SMTP connection failed:', error.message);
        return { 
            success: false, 
            message: `SMTP connection failed: ${error.message}` 
        };
    }
};

