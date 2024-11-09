export default defineNitroConfig({
	srcDir: 'server',
	compatibilityDate: '2024-11-08',
	runtimeConfig: {
		mailHost: process.env.NUXT_MAIL_HOST,
		mailUser: process.env.NUXT_MAIL_USER,
		mailPass: process.env.NUXT_MAIL_PASS,
	},
	preset: 'vercel',

})