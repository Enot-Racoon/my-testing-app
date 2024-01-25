import { useCallback, useEffect, useState } from 'react'

export const useAsync = <T>(asyncFn: () => Promise<T>, immediate = true) => {
  const [state, setState] = useState<'init' | 'pending' | 'resolved' | 'rejected'>('init')
  const [result, setResult] = useState<T | null>(null)
  const [pending, setPending] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const dispatch = useCallback(async () => {
    setError(null)
    setPending(true)
    setState('pending')

    try {
      setResult(await asyncFn())
      setPending(false)
      setState('resolved')
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e)
        setPending(false)
        setState('rejected')
      }
    }
  }, [asyncFn])

  useEffect(() => {
    if (immediate) void dispatch()
  }, [asyncFn, dispatch, immediate])

  return { state, result, pending, error, dispatch }
}
