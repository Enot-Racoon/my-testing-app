export const ErrorMessage = ({ error }: { error: unknown }) => {
  if (error instanceof Error) {
    return <div>Error: {error.message}</div>
  } else {
    return null
  }
}
