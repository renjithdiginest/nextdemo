import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'
import User from '../../models/User'


export default async function user(req, res) {
  try {
    const session = await getLoginSession(req)
    const user = { username : 'Renjith'}

    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}