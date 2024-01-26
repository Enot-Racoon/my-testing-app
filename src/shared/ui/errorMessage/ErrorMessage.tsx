import styles from './ErrorMessage.module.scss'

export const ErrorMessage = ({ error }: { error: unknown }) => {
  if (error instanceof Error) {
    return <div className={styles.errorMessage}>Error: {error.message}</div>
  } else {
    return null
  }
}
