import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const config = useRuntimeConfig(event)
	const method = event.method

	if(method === 'OPTIONS') {
		setResponseStatus(event, 200)
	}

	try {
		const transporter = nodemailer.createTransport({
			host: config.mailHost,
			port: 587,
			auth: {
				user: config.mailUser,
				pass: config.mailPass,
			},
			tls: {
				rejectUnauthorized: false,
			},
		})

		await transporter.sendMail({
			from: `support <nii@hireafrica.io>`,
			replyTo: body.to,
			to: `support@hireafrica.io`,
			subject: body.subject,
			text: body.text,
		})

		return { message: 'Email sent' }
	} catch (e) {
		console.log(e)
	}
})