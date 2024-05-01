import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,  faSitemap, faWifi } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'



type FeatureProps ={
    icon:IconDefinition,
    title:string,
    description:string
}

const FeatureCard:React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className=' px-4 py-10 w-full md:w-[45%] lg:w-[31%] flex flex-col justify-center gap-4'>
            <div className="icon text-white text-4xl bg-blue-700 rounded-full flex items-center justify-center w-14 h-14">
            <FontAwesomeIcon icon={icon} />
            </div>
            <div className="title ">
                <h2 className="font-bold text-2xl">{title}</h2>
            </div>
            <div className="description">
                <p className="text-lg text-justify">{description}</p>
            </div>
        </div>
    )
}

const SecondBody = () => {
    return (
        <>
            <div className="features-wrapper mt-10 mb-10">
                <div className="container max-w-[1280px] mx-auto flex flex-col gap-[4rem]">
                    <div className="row text-center">
                        <h2 className='font-bold text-3xl'>Messaging for All</h2>
                        <p className='text-lg  mt-5 '>User Generated content in real-time will have multiple touchpoints for offshoring</p>
                    </div>
                    <div className="row boxes flex gap-6 flex-wrap justify-center">
                        <FeatureCard
                         icon={faBriefcase} 
                         title="Easier Work Organization"
                          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsam optio necessitatibus 
                          excepturi quas minima quisquam deleniti, id expedita amet placeat maxime.`}
                           />
                        <FeatureCard
                         icon={faWifi} 
                         title="Fast Connection"
                          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsam optio necessitatibus 
                          excepturi quas minima quisquam deleniti, id expedita amet placeat maxime.`}
                           />
                        <FeatureCard
                         icon={faSitemap} 
                         title="Streamlined Processes"
                          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsam optio necessitatibus 
                          excepturi quas minima quisquam deleniti, id expedita amet placeat maxime.`}
                           />

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondBody;