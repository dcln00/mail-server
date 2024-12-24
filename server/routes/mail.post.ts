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
			from: body.send,
			replyTo: body.to,
			to: body.rec,
			subject: body.subject,
			text: body.text,
		})

		return { message: 'Email sent' }
	} catch (e) {
		console.log(e)
	}
})
