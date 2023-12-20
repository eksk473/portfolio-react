import { images } from '../../../assets'
import './Access.scss'

const Access = () => {
  // fn
  const setNickName = () => {
    console.log('ok')
  }

  //layout
  return (
    <div className="AccessPage">
      <div className="container">
        <img src={images.logo} alt="logo" />
        <div className="tit mb_20">반가워요! 자기소개를 해주세요!</div>
        <form onSubmit={setNickName}>
          <div className="input_wrap mb_30">
            <input
              type="text"
              name="nick_name"
              id="ninkName"
              maxLength={10}
              placeholder="닉네임을 입력해주세요.(최대10자)"
              autoComplete="off"
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
