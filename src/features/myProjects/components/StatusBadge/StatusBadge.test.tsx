import { render, screen } from '@testing-library/react'
import { StatusBadge } from '@features/myProjects/components/StatusBadge/StatusBadge'

describe('StatusBadge', () => {
  const testStatus = {
    text: 'TEST STATUS',
    color: 'orange'
  }

  it('Should render badge with given text in it', () => {
    render(<StatusBadge status={testStatus} />)

    expect(screen.getByText(testStatus.text)).toBeDefined()
  })
})
