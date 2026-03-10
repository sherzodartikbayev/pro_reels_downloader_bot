import { Bot, webhookCallback } from 'grammy'
import 'dotenv/config'

const token = process.env.TELEGRAM_BOT_TOKEN
if (!token) throw new Error('TELEGRAM_BOT_TOKEN is missing')

const bot = new Bot(token)

export default webhookCallback(bot, 'std/http')
