import db from '@src/lib/db/index.ts'

// Get All Users
const getAllUsers = () => {
return db.users.find()
}