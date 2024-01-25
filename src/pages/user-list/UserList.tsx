import { useEffect, useState } from 'react'

import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'
import { getUsers, type User } from '@src/shared/api'
import { UserRow } from '@src/entities/user'
import { Loader } from '@ui/loader'

export default function UserList() {
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers())
    }
    void fetchUsers()
  }, [])

  if (users === null) {
    return <Loader />
  }

  if (users.length === 0) {
    return <>Users not found</>
  }

  return (
    <Layout header={Header}>
      <h2>Uses:</h2>
      <div>
        {users.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    </Layout>
  )
}
