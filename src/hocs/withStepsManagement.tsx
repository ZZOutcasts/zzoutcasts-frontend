import { ComponentType, useMemo, useState } from 'react'
import {
  StepsManagementContext,
  WithStepManagementContextProps
} from '@contexts/StepsManagementContext'

export const withStepsManagement =
  <T extends object>(WrappedComponent: ComponentType<T>, stepsCount: number) =>
  (props: T) => {
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () =>
      setCurrentStep((current) =>
        current < stepsCount ? current + 1 : current
      )

    const prevStep = () =>
      setCurrentStep((current) => (current > 0 ? current - 1 : current))

    const lastStepIndex = stepsCount - 1

    const completedStepIndex = stepsCount

    const contextObject = useMemo<WithStepManagementContextProps>(
      () => ({
        prevStep,
        nextStep,
        currentStep,
        stepsCount,
        lastStepIndex,
        completedStepIndex
      }),
      [currentStep, stepsCount]
    )

    return (
      <StepsManagementContext.Provider value={contextObject}>
        <WrappedComponent {...props} />
      </StepsManagementContext.Provider>
    )
  }
