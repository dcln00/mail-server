import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	try {
		const transporter = nodemailer.createTransport({
			host: body.host,
			port: body.port,
			auth: {
				user: body.user,
				pass: body.pass,
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
