import 'dotenv/config'
import { Bot } from 'grammy'

const token = process.env.TELEGRAM_BOT_TOKEN
if (!token) throw new Error('TELEGRAM_BOT_TOKEN is not defined in .env')

const bot = new Bot(token)

export { bot }
