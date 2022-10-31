import { useEffect, useState } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { MultiSelect, MultiSelectProps, SelectItem } from '@mantine/core'
import { ApiMultiSelectItem } from '@types'
import { ApiMultiSelectItemComponent } from './ApiMultiSelectItemComponent'
import { ApiMultiSelectElementComponent } from './ApiMultiSelectElementComponent'

type ApiSearchableMultiSelectProps = {
  query: UseQueryResult<ApiMultiSelectItem[], Error>
  shouldReFetchOnSearchChange?: boolean
  noDataMessage?: string
  value: ApiMultiSelectItem[]
  onChange: (values: ApiMultiSelectItem[]) => void
} & Partial<MultiSelectProps>

export const ApiMultiSelect = ({
  query,
  shouldReFetchOnSearchChange,
  onSearchChange,
  onChange,
  noDataMessage,
  value: defaultValue = [],
  error: givenError,
  placeholder,
  ...props
}: ApiSearchableMultiSelectProps) => {
  const { isLoading, error, data } = query

  const [currentData, setCurrentData] = useState<ApiMultiSelectItem[]>([])

  const [searchValue, setSearchValue] = useState('')

  const [chosenItems, setChosenItems] =
    useState<ApiMultiSelectItem[]>(defaultValue)

  useEffect(() => {
    if (data) {
      setCurrentData(data)
    }
  }, [data])

  useEffect(() => {
    if (chosenItems === defaultValue) return
    onChange(chosenItems)
  }, [chosenItems])

  const getDisabledItemMessageWithChosenItems = (
    value: string,
    optionalArgs?: any
  ) => [{ value, disabled: true, ...optionalArgs }, ...chosenItems]

  const getData = (): ApiMultiSelectItem[] & SelectItem[] => {
    if (shouldReFetchOnSearchChange && searchValue === '')
      return getDisabledItemMessageWithChosenItems(placeholder || '', {
        center: true
      })

    if ((!shouldReFetchOnSearchChange || currentData.length === 0) && isLoading)
      return getDisabledItemMessageWithChosenItems('Loading...')

    if (error) return []

    if (currentData.length !== 0) return [...currentData, ...chosenItems]

    return getDisabledItemMessageWithChosenItems('')
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    onSearchChange && onSearchChange(value)
  }

  const handleAddItem = (value: string) => {
    setChosenItems((prevState) => {
      const newElement =
        currentData && currentData.find((item) => item.value === value)

      return newElement ? [...prevState, newElement] : [...prevState]
    })
  }

  const handleRemoveItem = (values: string[]) => {
    setChosenItems((prevState) =>
      prevState.filter((element) => values.includes(element.value))
    )
  }

  const handleChange = async (values: string[]) => {
    if (values.length > chosenItems.length) {
      return handleAddItem(values.at(values.length - 1) || '')
    }
    handleRemoveItem(values)
  }

  const getErrorMessage = () => {
    if (error)
      return 'An error occurred while loading the data. Try refreshing the page'
    return givenError || undefined
  }

  return (
    <MultiSelect
      {...props}
      onSearchChange={handleSearchChange}
      onChange={handleChange}
      value={chosenItems.map((x) => x.value)}
      error={getErrorMessage()}
      data={getData().map(({ label, value, ...item }) => ({
        label: label || value,
        value,
        ...item
      }))}
      placeholder={placeholder}
      nothingFound={noDataMessage}
      valueComponent={ApiMultiSelectElementComponent}
      itemComponent={ApiMultiSelectItemComponent}
    />
  )
}
