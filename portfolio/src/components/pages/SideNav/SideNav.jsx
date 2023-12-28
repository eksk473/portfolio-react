import { images } from '../../../assets'
import './SideNav.scss'

import { useEffect, useMemo } from 'react'
import { useNavigate, useOutlet, useLocation } from 'react-router-dom'
import { Cookies, useCookies } from 'react-cookie'

const SideNav = () => {
  const navi = useNavigate()
  const location = useLocation()
  const outlet = useOutlet()
  const cookies = new Cookies()
  const [cookie] = useCookies(['accessNickname'])

  const handleLogout = () => {
    cookies.remove('accessNickname')
    navi('/access')
  }

  const selected = useMemo(() => {
    const pathname = location.pathname

    switch (pathname) {
      case '/profile':
        return 0
      case '/careers':
        return 1
      case '/project':
        return 2
      default:
        return ''
    }
  }, [location.pathname])

  useEffect(() => {}, [])
  return (
    <>
      <div className="content_wrap">
        <div className="SideNav">
          <div className="logo_wrap">
            <img
              src={images.logo}
              alt="logo"
              className="logo"
              onClick={() => navi('/')}
            />
          </div>
          <div className="access_info flex_center mb_20">
            <div className="access_name bold">{cookie.accessNickname}님</div>
            <div className="btn_wrap sm out">
              <button onClick={handleLogout}>나가기</button>
            </div>
          </div>
          <ul>
            <li className={`${selected === 0 && 'on'}`}>
              <div className="btn_wrap">
                <button type="button" onClick={() => navi('/profile')}>
                  profile
                </button>
              </div>
            </li>
            <li className={`${selected === 1 && 'on'}`}>
              <div className="btn_wrap">
                <button type="button" onClick={() => navi('/careers')}>
                  careers
                </button>
              </div>
            </li>
            <li className={`${selected === 2 && 'on'}`}>
              <div className="btn_wrap">
                <button type="button" onClick={() => navi('/project')}>
                  project
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="page_wrap">{outlet}</div>
      </div>
    </>
  )
}

export { SideNav }
