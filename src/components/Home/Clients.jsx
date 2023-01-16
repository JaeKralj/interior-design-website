import modernHomePic from 'assets/client01.png'
import styleVintageInteriorPic from 'assets/client02.png'
import brandPic from 'assets/client03.png'
import natureHomePic from 'assets/client04.png'
import classicDesignStudioPic from 'assets/client05.png'
export default function Clients() {
  return (
    <div className='max-w-1200 justify-evenly flex flex-wrap gap-3 mx-auto my-20'>
      <img src={modernHomePic} alt='' />
      <img src={styleVintageInteriorPic} alt='' />
      <img src={brandPic} alt='' />
      <img src={natureHomePic} alt='' />
      <img src={classicDesignStudioPic} alt='' />
    </div>
  )
}
