import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'

import racoonImage from '@src/assets/raccoon.jpg'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <Layout header={Header}>
      <h1>Home Page</h1>
      <img className={styles.image} alt="" src={racoonImage} />
    </Layout>
  )
}
