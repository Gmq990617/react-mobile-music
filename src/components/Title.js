import { Carousel } from 'antd'
import React from 'react'
import '../styles/css/title.scss'
import Scroll1 from '../styles/images/scroll-1.jpg'
import Scroll2 from '../styles/images/scroll-2.jpg'
import settings from '../styles/images/settings.png'
import music from '../styles/images/music.png'

//css样式尽量使用calssName的方式书写而不是style，可在一定程度上防止XXS攻击
const Title = () => {
  return (
    <div className="top">
      <div className= "title">
        <img src={settings} alt= "settings" className="logo-button"/>
        <input className="search" />
        <img src={music} alt= "music" className="logo-button"/>
      </div>
      <Carousel autoplay>
          <div>
            <img src={Scroll1} className="bannerStyle" />
          </div>
          <div>
            <img src={Scroll2} className="bannerStyle" />
          </div>
      </Carousel>
    </div>
  )
}
export default Title