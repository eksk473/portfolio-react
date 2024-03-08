import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import 'swiper/css'
import './Project.scss'

const Project = () => {
  const [index, setIndex] = useState(0)
  const changeIndex = (i) => {
    setIndex(i)
  }
  const projectArray = [
    {
      title: '스폰지R',
      outline:
        '배달 어플 리뷰 자동 등록 서비스로, 프로젝트 전반의 퍼블리싱/프론트를 담당하였습니다.',
      url: [
        {
          link: 'https://r.spge.kr/',
          desc: '스폰지R 홈페이지'
        },
        {
          link: 'https://dev-r-admin.spge.kr',
          desc: '스폰지R Admin'
        }
      ],
      produce: [{ txt: '프레임워크 React.js 사용' }, { txt: '기여도 60%' }],
      screenShot: [
        { pic: 'spgeR_admin' },
        { pic: 'spgeR_admin2' },
        { pic: 'spgeR' }
      ]
    },
    {
      title: '홈페이지 리뉴얼',
      outline: '자사의 초기 제작 홈페이지를 리뉴얼하였습니다.',
      url: [
        {
          link: 'https://eksk473.github.io/project/homepage/example/index.html',
          desc: '홈페이지 살펴보기'
        }
      ],
      produce: [
        { txt: '부트스트랩과 외부플러그인을 이용해 퍼블리싱' },
        { txt: '기여도 100%' }
      ],
      screenShot: [{ pic: 'homepage_full' }]
    },
    {
      title: '동아출판 초등 영어',
      outline:
        '동아에서 출판한 영어 교과서의 디지털 교육자료로 DVD, WEB 뷰어 내부에서 구동되는 HTML 콘텐츠를 제작하였습니다.',
      produce: [
        { txt: '일부 HTML 콘텐츠 퍼블리싱' },
        { txt: '반응형 기기에 따른 이슈 수정, 유지보수' },
        { txt: '기여도 50%' }
      ],
      screenShot: [
        { pic: 'donga' },
        { pic: 'donga2' },
        { pic: 'donga3' },
        { pic: 'donga4' }
      ]
    },
    {
      title: '미래엔 하루 한장',
      outline:
        '미래엔 초등 참고서 하루 한장의 웹 콘텐츠로 참고서 내부의 QR을 인식하면 해당 페이지로 이동하도록 작업하였습니다.',
      produce: [
        { txt: '프로젝트 전반(메인, 리스트, 상세) 콘텐츠 퍼블리싱' },
        { txt: '기여도 80%' }
      ],
      screenShot: [
        { pic: 'miraen_science' },
        { pic: 'miraen_science2' },
        { pic: 'miraen_science3' },
        { pic: 'miraen_hangeul' },
        { pic: 'miraen_hangeul2' },
        { pic: 'miraen_hangeul3' }
      ]
    }
  ]
  return (
    <div className="ProjectPage">
      <div className="container">
        <div className="tit">Project</div>
        <div className="slide_wrap mb_30">
          <Swiper spaceBetween={20} slidesPerView={3.5}>
            {projectArray.map((project, i) => (
              <SwiperSlide onClick={() => changeIndex(i)} key={i}>
                {project.title}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="desc_wrap">
          <div className="tit">{projectArray[index].title}</div>
          <div>
            <div className="desc_tit">프로젝트 개요</div>
            <div>{projectArray[index].outline}</div>
            {projectArray[index].url &&
              projectArray[index].url.map((url, i) => (
                <a href={url.link} target="_blank" key={i}>
                  {url.desc}
                </a>
              ))}
          </div>
          <div>
            <div className="desc_tit">제작</div>
            {projectArray[index].produce.map((txt, i) => (
              <div key={i}>{txt.txt}</div>
            ))}
          </div>
          <div>
            <div className="desc_tit">프로젝트 스크린샷</div>
            {projectArray[index].screenShot.map((shot, i) => (
              <img
                src={require(`/src/assets/img/${shot.pic}.png`)}
                alt={shot.screenShot}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Project }
