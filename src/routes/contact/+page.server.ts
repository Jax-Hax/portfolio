import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from "$env/static/private";
sgMail.setApiKey(SENDGRID_API_KEY);

export const actions = {
    contact: async ({ url, locals, request }) => {
        const { text } = await request.json();
        console.log(text)
        const msg = {
            to: 'jaxbulbrook@gmail.com',
            from: 'support@cognnect.com', // Use the email address or domain you verified above
            subject: 'Cognnect email',
            html: `<p>${text}</p>`
        };
        sgMail.send(msg).then(
            () => { },
            (error) => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body);
                }
                return new Response(JSON.stringify({ message: "error" }), { status: 404 })
            }
        );
    },
}