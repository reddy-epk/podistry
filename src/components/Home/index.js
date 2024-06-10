import {Component} from 'react'
import HomeContent from '../HomeContentL'
import Header from '../HeaderL'

class Home extends Component {
  render() {
    return (
      <div className='homejs'>
        <Header />
        <HomeContent />
      </div>
    )
  }
}
export default Home
