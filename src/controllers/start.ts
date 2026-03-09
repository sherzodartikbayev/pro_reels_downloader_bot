import type { Context } from 'grammy'

const startController = async (ctx: Context) => {
	await ctx.reply('<b>Welcome</b>, you entered start command!', {
		parse_mode: 'HTML',
	})
}

export { startController }
