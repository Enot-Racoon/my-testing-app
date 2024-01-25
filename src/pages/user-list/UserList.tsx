import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'
import { getUsers } from '@src/shared/api'
import { UserRow } from '@src/entities/user'
import { Loader } from '@ui/loader'
import { useAsync } from '@src/shared/lib/hooks/useAsync'
import { ErrorMessage } from '@ui/errorMessage'

const UserListContent = () => {
  const { pending, error, result: users } = useAsync(getUsers)

  if (pending) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  if (users?.length === 0) {
    return <>Users not found</>
  }

  return <div>{users?.map(user => <UserRow key={user.id} user={user} />)}</div>
}

export default function UserList() {
  return (
    <Layout header={Header}>
      <h1>Users</h1>
      <UserListContent />
    </Layout>
  )
}
