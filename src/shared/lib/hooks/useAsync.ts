import { useCallback, useEffect, useState } from 'react'

export const useAsync = <T>(asyncFn: () => Promise<T>, immediate = true) => {
  const [result, setResult] = useState<T | null>(null)
  const [pending, setPending] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const dispatch = useCallback(async () => {
    setError(null)
    setPending(true)

    try {
      setResult(await asyncFn())
      setPending(false)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e)
        setPending(false)
      }
    }
  }, [asyncFn])

  useEffect(() => {
    if (immediate) void dispatch()
  }, [asyncFn, dispatch, immediate])

  return { result, pending, error, dispatch }
}
