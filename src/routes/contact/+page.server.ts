import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from "$env/static/private";
sgMail.setApiKey(SENDGRID_API_KEY);

export const actions = {
    contact: async ({ request }) => {
        const data = await request.formData();
        const msg = {
            to: 'jax@bulbrookwebdesigns.com',
            from: 'jax@bulbrookwebdesigns.com',
            subject: 'Web dev business contact form',
            html: `<p>${data.get('name')} sent you a message from business: ${data.get('business')} and email address: ${data.get('email')} and phone number: ${data.get('phone')} saying: {${data.get('description')}}</p>`
        };
        sgMail.send(msg).then(
            () => { },
            (error) => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body);
                }
            }
        );
    },
}