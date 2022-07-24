import { useMemo } from 'react'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-bottts-sprites'

export const useCurrentUser = () => {
  const userData = useMemo(
    () => ({
      username: 'Maciej',
      email: 'maciej.wiatr00@gmail.com',
      // TODO: These should be generated on backend
      avatar: createAvatar(style, {
        seed: 'k0ch4m4ngul4r4',
        dataUri: true
      })
    }),
    []
  )

  return userData
}
