import { User } from '@src/shared/api'

export interface UserRowProps {
  user: User
}

export const UserRow = ({ user }: UserRowProps) => {
  return (
    <div>
      <strong>{user.name}</strong>: ✉️ {user.email}, ☎️ {user.phone}
    </div>
  )
}
