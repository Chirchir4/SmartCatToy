import { Image } from "../../atoms/Image"
import bgImage from "../../assets/HeroVector.png"
import { Text } from "../../atoms/Text"
import { Button } from "../../atoms/Button"
import { Play } from "@phosphor-icons/react"
import {Pause} from "@phosphor-icons/react"
import {SpeakerSlash} from "@phosphor-icons/react"
import {SpeakerHigh} from "@phosphor-icons/react"
import { Fade, Slide } from "react-awesome-reveal"
import cat from "../../assets/cat1.png"
import ReactPlayer from 'react-player/lazy';
import { useRef, useState } from "react"
import CatToyVideo from "../../assets/CatToyVideo3.mp4"
import {useNavigate} from "react-router-dom"

const HeroSection = () => {
    const playerRef = useRef(null);
    const navigate=useNavigate()

    const [showVideo, setShowVideo] = useState(false);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(false);
   
const viewProduct=()=>{
navigate("/shop")
}
const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVideoEnded = () => {
    setShowVideo(false);
    setPlaying(false);
  };
  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
   
  };
    return (
        <section className="w-full -ml-2 -mb-20 lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden overflow-y-hidden flex justify-end">
         <Image className="h-[60%] w-[90%] lg:h-[70vh] md:h-[40vh] lg:w-1/2 md:w-[55%]" image={bgImage} alt="Hero Background Vector" />      

        <main className="w-full lg:h-full h-auto grid md:grid-cols-2  mt-6 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-20 md:pt-32 lg:pt-0">
            <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
                <Text as="p" className="text-color1 uppercase flex justify-start tracking-widest lg:text-base  text-sm font-normal">
                    <Fade>     
                         <div className="flex  h-full">
    <p>MaxPlay Innovations</p>
    <span className="mt-1">&trade;</span>
  </div></Fade>
                </Text>
                <Text as="h1" className=" text-color3 lg:text-7xl mt-0 lg:-mt-7  flex justify-start md:text-5xl text-3xl font-medium">
                    <Fade>Smart Cat Toy</Fade>
                </Text>
                <Text as="p" className="text-color3  flex justify-start mt-0  lg:-mt-5 md:text-base text-sm text-justify font-light">
                   
                   <Fade> <div>We work hard for your cats, so you don’t have to!

                        <br/>
                        Introducing the Smart Cat Toy – both adaptive and automated, bringing unparalleled joy and exercise to your feline friend. Let the play begin, even when you're away! 
                        <span className="text-xl ml-4">🐾</span></div></Fade>
                </Text>
                <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
                
                    <Button type="button" className="outline-none border-none lg:px-7 px-3 py-3 text-sm md:text-lg bg-color2 text-white font-extralight rounded-lg" onClick={()=>viewProduct()}>
                    Shop Now
                    </Button>
               
                    <div className="flex items-center lg:gap-6 gap-3 cursor-pointer"  onClick={() => setShowVideo(!showVideo)}>
                        <Text as="span" className="relative flex h-14 w-14">
                            <Text as="span" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"></Text>
                            <Text as="span" className="relative flex justify-center items-center text-white rounded-full md:h-14 w-14 bg-color1">
                            
                                     {showVideo && (
                  <Pause
                    size={24}
                    color="currentColor"
                    weight="fill"
                    onClick={togglePlayPause}
                  />
                )}
                {!showVideo && (
                  <Play
                    size={24}
                    color="currentColor"
                    weight="fill"
                    onClick={togglePlayPause}
                  />
                )}
              
                            </Text>
                        </Text>
                        {!showVideo &&(
                        <Button type="button"  className="outline-none border-none font-medium  text-sm md:text-lg " >
                         Play Demo
                        </Button>)}
                        {showVideo &&(
                        <Button type="button"  className="outline-none border-none font-medium  text-sm md:text-lg " >
                         Stop Demo
                        </Button>)}
                    </div>
     
                </div>
           
            </div>
            <div className="flex relative  items-center justify-center md:justify-end md:order-2   order-1 ">
            {!showVideo && (
                <Slide direction="right">
               

                    <Image image={cat} alt="Hero Image" className=" lg:h-[60%] lg:w-[105%] md:h-[100%] md:w-full w-[100%] h-[50vh]" />
                  
                 
                </Slide>
            )}

                {showVideo && (
                  
                    <div className="  flex justify-center items-center ">
                          <Slide direction="right"> 
                    <div >                   
                    <div className="relative flex items-center justify-center  w-72 ">
      <ReactPlayer
        ref={playerRef}
        url={CatToyVideo}
       
 className="lg:w-full  "
     
        // controls={true}
        playing={playing}
        volume={muted ? 1 : 0} // Set initial volume based on mute state
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              autoPlay: true,
            },
          },
        }}
        onEnded={handleVideoEnded}
        />
  
        {/* Add a button to toggle mute/unmute */}
        <button className="absolute bottom-0 lg:left-4 left-8" onClick={toggleMute}>
          {muted ? (<div><SpeakerHigh color="white" size={24} /></div>) :( <div><SpeakerSlash  color="white" size={24} /></div>)}
        </button>
      </div>
   
   
  

   <div  className="text-color3 mt-2 flex justify-center text-xs text-justify font-bold">
    Smart adaptive cat toy, activated by your cat’s motion 
    <br/> and shuts off when your cat walks away.
    </div>
   </div> 
   </Slide>
</div> )}
            </div>
       
        </main>
        
    </section>
    )
}

export default HeroSection