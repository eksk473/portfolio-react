import './Access.scss'
import { images } from '../../../assets'

import { useForm } from 'react-hook-form'
import { Cookies } from 'react-cookie'
import * as dayjs from 'dayjs'

const Access = () => {
  // fn
  const cookies = new Cookies()
  const { register, handleSubmit } = useForm({})

  const setNickName = (data) => {
    cookies.set('accessNickname', data.nick_name, {
      expires: dayjs().add(1, 'day').toDate()
    })
  }

  //layout
  return (
    <div className="AccessPage">
      <div className="container">
        <img src={images.logo} alt="logo" />
        <div className="tit mb_20">반가워요! 자기소개를 해주세요!</div>
        <form onSubmit={handleSubmit(setNickName)}>
          <div className="input_wrap mb_30">
            <input
              type="text"
              name="nick_name"
              maxLength={10}
              placeholder="닉네임을 입력해주세요.(최대10자)"
              autoComplete="off"
              {...register('nick_name')}
            />
          </div>
          <div className="btn_wrap">
            <button type="submit">입장하기</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Access }
