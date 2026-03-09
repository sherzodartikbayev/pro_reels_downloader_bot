import { messageController } from '../controllers/message.js'
import { bot } from '../core/bot.js'

bot.on('message', messageController)
