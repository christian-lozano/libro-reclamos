import { connect, connection } from 'mongoose'

const conn = {
  isConnected: false,
}
export async function dbConnect() {
  if (conn.isConnected) return
  const db = await connect(
    
    
    'mongodb+srv://admin:12345@test-crud.kqme1xd.mongodb.net/users?retryWrites=true&w=majority'
  )

  conn.isConnected = db.connections[0].readyState
 
}
connection.on('connected', () => {
  console.log('mongo db is connected')
})

connection.on('error', (err) => {
  console.log('mongo db is error', err)
})
