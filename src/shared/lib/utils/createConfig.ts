type RequiredNotNullable<T> = {
  [P in keyof T]-?: NonNullable<T[P]>
}
export const createConfig = <T extends Record<string, unknown>>(config: T) => {
  const getEnv = <K extends keyof T>(key: K) => {
    const val = config[key]
    if (val !== undefined && val !== '') {
      return val
    }

    throw new Error(`Undefined config value of <${String(key)}>`)
  }

  return Object.keys(config).reduce(
    (acc, key) => Object.assign(acc, { [key]: getEnv(key) }),
    {},
  ) as RequiredNotNullable<T>
}
