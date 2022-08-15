export type PickByValue<T, A> = Pick<
  T,
  { [K in keyof T]: T[K] extends A ? K : never }[keyof T]
>
export type ObjectEntries<T> = {
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]]
}[keyof T][]
