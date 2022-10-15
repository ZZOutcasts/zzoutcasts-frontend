import { useState } from 'react'

export interface ModalManagement {
  isOpened: boolean
  changeModalState: () => void
}

export const useModalManagement = () => {
  const [opened, setOpened] = useState(false)

  const changeModalState = () => {
    setOpened((prevState) => !prevState)
  }

  return { isOpened: opened, changeModalState }
}
