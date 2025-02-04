import { ButtonCon } from "@/components/ui/buttonCon";
import {FiDownload} from "react-icons/fi"
import SocialMedia from './../components/socialMedia';
import { Statistics } from "@/components/Statistics";
import HeaderPhoto from '@/components/HeaderPhoto';

export default function Home() {
  return (
<section className="h-full">
  <div className="container mx-auto h-full">
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      <div className="text-center xl:text-left order-2 xl:order-none ">
        <span> Software Developer</span>
          <h1 className='h1 mb-6'> Hello I am <br/> <span className="text-accent"> Klaudia Janecka </span> </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have also great experience in DevOps faculty. Check my page and leave ur contact!    </p>
         <div className="flex gap-8 flex-col xl:flex-row items-center">
          <ButtonCon variant='outline'>
          <span href='/cloud_pofolio/assets/CV.pdf'> Download CV </span>
            <FiDownload />
          </ButtonCon>
          <div className='mb-8 xl:mb-0'> 
          <SocialMedia containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary
          hover:transition-all duration-500">
            </SocialMedia>
            </div>
          </div>
         </div>
      <div className="order-1 xl:order-none px-2 mb-8 xl:mb-0">
      <HeaderPhoto/>
         </div>
     </div>
  </div>
  <Statistics/>
  </section>
  );
}
