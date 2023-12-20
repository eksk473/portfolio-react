import { Navigate, useOutlet } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { isEmpty } from 'lodash'

const NoCookie = () => {
  const [cookies] = useCookies(['accessNickname'])
  const outlet = useOutlet()

  if (!isEmpty(cookies?.accessNickname)) {
    return <Navigate to="/" replace />
  } else {
    return <>{outlet}</>
  }
}

export { NoCookie }
