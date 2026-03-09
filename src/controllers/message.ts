import type { Context } from 'grammy'
import axios from 'axios'

const checkValidUrl = (url: string) => {
	const regex =
		/^https:\/\/\www\.instagram\.com\/reel\/[A-Za-z0-9]+(\/|\?|&|#|$)/
	return regex.test(url)
}

const downloadInstagramReel = async (url: string, ctx: Context) => {
	const options = {
		method: 'GET',
		url: 'https://instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com/convert',
		params: {
			url: url,
		},
		headers: {
			'x-rapidapi-key': 'd6521dcf05msh8f37a1ab9e63164p1fefb1jsn9f670d68ba54',
			'x-rapidapi-host':
				'instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com',
		},
	}

	async function fetchData() {
		try {
			const response = await axios.request(options)
			await ctx.replyWithVideo(response.data.media[0].url, {
				caption: `Download via @pro_reels_downloader_bot`,
			})
		} catch (error) {
			console.error(error)
			ctx.reply('Sorry, I could not download the video')
		}
	}
	fetchData()
}

const messageController = async (ctx: Context) => {
	const message = ctx.message?.text as string
	const isValid = checkValidUrl(message)
	if (isValid) {
		await ctx.reply(`We are processing your request, please wait...`)
		await ctx.replyWithChatAction('upload_video')
		await downloadInstagramReel(message, ctx)
	} else {
		await ctx.reply(`Send a valid URL!`)
	}
}

export { messageController }
