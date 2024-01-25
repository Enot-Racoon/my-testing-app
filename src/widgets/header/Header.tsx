import Routes from '@src/pages/routes'
import { Link, LinkProp } from '@ui/link'

import styles from './Header.module.scss'

const NavLink = (props: LinkProp) => {
  return <Link className={styles.link} activeClassName={styles.active} {...props} />
}

export default function Header() {
  return (
    <ul className={styles.header}>
      <li>
        <NavLink to={Routes.Home.path}>Home</NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to={Routes.Products.path}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to={Routes.Users.path}>
          Users
        </NavLink>
      </li>
    </ul>
  )
}
