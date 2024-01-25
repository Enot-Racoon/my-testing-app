import { useEffect, useState } from 'react'
import { getUsers, type User } from '@src/shared/api'
import { UserRow } from '@src/entities/user'

export default function UserList() {
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers())
    }
    void fetchUsers()
  }, [])

  if (users === null) {
    return <>Loading ...</>
  }

  if (users.length === 0) {
    return <>Users not found</>
  }

  return (
    <>
      <h2>Uses:</h2>
      <div>
        {users.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    </>
  )
}
