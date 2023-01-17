import modernHomePic from 'assets/client01.png'
import styleVintageInteriorPic from 'assets/client02.png'
import brandPic from 'assets/client03.png'
import natureHomePic from 'assets/client04.png'
import classicDesignStudioPic from 'assets/client05.png'
export default function Clients() {
  return (
    <div className='max-w-1200 justify-evenly lg:flex-row flex flex-col gap-3 mx-auto my-20'>
      <img src={modernHomePic} alt=''  className='scale-50' />
      <img src={styleVintageInteriorPic} alt='' className='scale-50' />
      <img src={brandPic} alt='' className='scale-50' />
      <img src={natureHomePic} alt='' className='scale-50' />
      <img src={classicDesignStudioPic} alt='' className='scale-50' />
    </div>
  )
}
