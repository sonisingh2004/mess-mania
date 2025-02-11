import db from "@/lib/db"

// Get All Users
export const getAllUsers = () => {
  return db.query.users.findMany()
}