import { createContext } from 'react'

export interface WithStepManagementContextProps {
  prevStep: () => void
  nextStep: () => void
  currentStep: number
  stepsCount: number
  lastStepIndex: number
  completedStepIndex: number
}

export const StepsManagementContext =
  createContext<WithStepManagementContextProps>(
    {} as WithStepManagementContextProps
  )
