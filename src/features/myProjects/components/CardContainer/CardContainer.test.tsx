import { render, screen } from '@testing-library/react'
import { CardContainer } from './CardContainer'
import '@testing-library/jest-dom'

describe('CardContainer', () => {
  it('Should render given element in "a" tag with given url', () => {
    const testLink = '/test_url'
    let testId = 'test_id'
    const testChildren = <div data-testid={testId}>Test</div>

    render(<CardContainer link={testLink}>{testChildren}</CardContainer>)

    expect(screen.getByTestId(testId)).toBeDefined()
    expect(screen.getByRole('link')).toHaveAttribute('href', testLink)
  })
})
