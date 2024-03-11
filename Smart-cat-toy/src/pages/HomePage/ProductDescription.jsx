
import { Text } from '../../atoms/Text'
import { Card } from '../../molecules/Card'
import paws from "../../assets/paws.png"
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'
import bluetoy from '../../assets/bluetoy.png'
import PatentPending from "../../assets/PatentPending.png"
const ProductDescription = () => {

    return (
        <>
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6   lg:-my-24 sm:my-82   gap-5 ">
         
             <Image className="hidden  sm:block w-auto md:w-3/4 md:-ml-8" image={paws} alt="paws" />
            <main className='w-full md:absolute grid md:grid-cols-2 lg:gap-4 gap-9 md:gap-3'>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col  order-2 md:order-1'>
  <Text as="h1" className="lg:text-4xl md:text-2xl text-4xl text-color3 font-medium">
    Product Description 
  </Text>
  <ul className='flex flex-col gap-8  lg:mt-2 mt-2'>
    <Text as='p' className='text-md sm:text-lg md:text-sm lg:text-md xl:text-lg text-color3 font-light leading-relaxed'
 
    >
    Like humans, cats require exercise and amusement to maintain proper
physical and mental health. Often cats are left alone indoors during
hours when their owners are at work or otherwise away from home. To
help facilitate exercise and amusement of these pets even during hours
when the pet owner is absent or too busy to play with the pet personally,
we have developed a smart cat toy which is both adaptive and automated.
<br/>
The hunting instinct of a cat, is stimulated by waving the free end of the
lightweight durable and strong elastic. The cat engages in a pouncing
and chasing behavior, which is amusing and provides the cat with the
much needed exercise.
<br/>
To enable the automated cat toy by the pet in the absence of the owner,
and to save energy when the pet is not actively playing with the toy, a
motion sensor has been integrated. A special program runs the toy at
different speeds and directions, adapting to the amount of interaction
from the cat.
      <Text as='span' className='text-md text-color3 font-medium  block'>
        Your cat will be amazed and entertained for hours on end!
      </Text>
    </Text>
  </ul>
</div>

                {/* Card Container  */}
                <div className='w-full h-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2 lg:mt-20'>
                    {/* First Card  */}
                    <Card className="relative" cardClass='lg:w-[70%] md:w-[80%] w-[90%] h-full  shadow-2xl shadow-sky-500/70 p-1 rounded-xl flex flex-col gap-4' 
                     imageSrc={bluetoy} imageWrapperClass='h-full overflow-hidden rounded-xl shadow' cover='object-cover object-top' textWrapperClass='flex flex-col gap-3'>
                       <img src={PatentPending} className="absolute  top-10 left-4 h-14 lg:h-20 "/>
                    </Card>
 
                
                </div>
            </main>
           
        </section>
       
        </>
    )
}

export default ProductDescription