import '../styles/css/common.scss'
import '../styles/css/chineseSong.scss'
import Renew from '../styles/images/renew.png'
import Play from '../styles/images/play.png'

const ChineseSong = () => {
  return (
    <div className="sub-box chinese-song">
      <div className="subtitle">
        <span className="subtitle-left"><img className="subtitle-left-renew" src={Renew} />让你单曲循环的华语歌曲</span>
        <span className="subtitle-right"><img className="subtitle-right-play" src={Play} />播放</span>
      </div>
    </div>
  )
}
export default ChineseSong