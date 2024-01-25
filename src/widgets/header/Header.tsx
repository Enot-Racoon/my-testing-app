import Routes from '@src/pages/routes'
import { Link, LinkProp } from '@ui/link'

import styles from './Header.module.scss'

const NavLink = (props: LinkProp) => {
  return <Link className={styles.link} activeClassName={styles.active} {...props} />
}

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        My Testing App
      </Link>
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
    </div>
  )
}
