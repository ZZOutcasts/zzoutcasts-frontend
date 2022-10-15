import { BsCheck2 } from 'react-icons/bs'
import { showNotification } from '@mantine/notifications'

interface ShowSuccessNotificationProps {
  message: string
  title: string
}

export const showSuccessNotification = ({
  message,
  title
}: ShowSuccessNotificationProps) =>
  showNotification({
    color: 'teal',
    title,
    message,
    icon: <BsCheck2 size={16} />,
    autoClose: 10000
  })
