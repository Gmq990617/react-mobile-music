import '../styles/css/mutipleButton.scss'
const buttonList = [
  {description: '每日推荐', image: require('../styles/images/Muti-everyday.png')},
  {description: '私人FM', image: require('../styles/images/Muti-selfFM.png')},
  {description: '歌单', image: require('../styles/images/Muti-songList.png')},
  {description: '排行榜', image: require('../styles/images/Muti-rank.png')},
  {description: '直播', image: require('../styles/images/Muti-live.png')},
  {description: '数字专辑', image: require('../styles/images/Muti-album.png')},
  {description: '有声书', image: require('../styles/images/Muti-voiceBook.png')},
  {description: '关注新歌', image: require('../styles/images/Muti-newSong.png')},
  {description: '歌房', image: require('../styles/images/Muti-songHouse.png')},
  {description: '游戏专区', image: require('../styles/images/Muti-game.png')}
]

const MutipleButton = () => {
  return (
    <div className="button-list">
      { buttonList.map(item => (
        <div key= "index" className="button">
          <img className="button-img" src={ item.image }/>
          <div className="button-text">{ item.description }</div>
        </div>
      )) }
    </div>
  )
}
export default MutipleButton