import '../styles/css/recommendSong.scss'
import '../styles/css/common.scss'
import rightSorrow from '../styles/images/right-sorrow.png'

const RecommendSongList = [
  {description: '今天又是美好的一天呀今天又是美好的一天呀', image: require('../styles/images/Recom-pic1.png')},
  {description: '今天又是美好的一天呀今天又是美好的一天呀', image: require('../styles/images/Recom-pic2.png')},
  {description: '今天又是美好的一天呀今天又是美好的一天呀', image: require('../styles/images/Recom-pic3.png')},
  {description: '今天又是美好的一天呀今天又是美好的一天呀', image: require('../styles/images/Recom-pic4.png')},
  {description: '今天又是美好的一天呀今天又是美好的一天呀', image: require('../styles/images/Recom-pic5.png')},
  {description: '今天又是美好的一天呀今天又是美好的一天呀', image: require('../styles/images/Recom-pic6.png')}
]

const RecommendSong = () => {
  return (
    <div className="sub-box recommend-song">
      <div className="subtitle">
        <span className="subtitle-left">推荐歌单</span>
        <span className="subtitle-right">更多<img className="subtitle-right-sorrow" src={rightSorrow} /></span>
      </div>
      <div className="songsTypes">
        {
          RecommendSongList.map(item => (
            <div key="index" className="songsTypes-item">
              <img className="songsTypes-image" src={ item.image} />
              <div className="songsTypes-text">{ item.description }</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default RecommendSong