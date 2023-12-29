import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './Project.scss'

const Project = () => {
  const projectArray = [
    {
      title: '홈페이지 리뉴얼',
      outline: '자사의 초기 제작 홈페이지를 리뉴얼하였습니다.',
      url: [
        {
          link: 'https://eksk473.github.io/project/homepage/example/kor/index.html'
        },
        { desc: '홈페이지 살펴보기' }
      ],
      produce: [
        { txt: '부트스트랩과 외부플러그인을 이용해 퍼블리싱' },
        { txt: '기여도 100%' }
      ],
      screenShot: ''
    }
  ]
  return (
    <div className="ProjectPage">
      <div className="container">
        <div className="tit mb_30">Project</div>
        <div className="slide_wrap mb_20">
          <Swiper spaceBetween={20} slidesPerView={3.5}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
          </Swiper>
        </div>
        <div className="project_wrap">프로젝트 내용</div>
      </div>
    </div>
  )
}

export { Project }
