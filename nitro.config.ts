export default defineNitroConfig({
	srcDir: 'server',
	compatibilityDate: '2024-11-08',
	runtimeConfig: {
		mailHost: process.env.NUXT_MAIL_HOST,
		mailUser: process.env.NUXT_MAIL_USER,
		mailPass: process.env.NUXT_MAIL_PASS,
	},
	preset: 'vercel',
	routeRules: {
		'/api/**': {
			cors: true,
			headers: {
				'Access-Control-Allow-Origin': 'https://hireafrica.io',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
				'Access-Control-Allow-Headers': 'Content-Type'
			}
		}
	}
})