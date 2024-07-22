import React from 'react'
import images from '../../assets/images'
import { FaBitbucket, FaGithub, FaGitlab } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='container'>
            <div className="flex flex-col md:flex-row items-center justify-around p-8 bg-background">
                <div className="md:w-1/2">
                    <h1 className="text-4xl leading-1 md:leading-[80px] md:text-[80px] font-bold text-mainZero">
                        Always
                        <br />
                        Ready to Code.
                    </h1>
                    <div>
                        <p className="mt-4 text-lg text-muted-foreground text-[23px]">Spin up fresh, automated dev environments <br /> for each task, in the cloud, in seconds.</p>
                        <button className="mt-6 bg-[#FFAE33] text-primary-foreground px-6 font-semibold py-2 rounded-lg hover:bg-primary/80">Try Now</button>
                    </div>
                    <p className="mt-2 text-sm text-mainGray">Open a workspace. Start from any Git context.</p>
                    <div className="flex items-center gap-3 mt-4">
                        {/* <img src="https://openui.fly.dev/openui/gitlab.svg" alt="GitLab" className="h-6 w-6 mr-2" /> */}
                        <div className="h-6 w-6 mr-2 text-3xl text-[#FC6D26]"><FaGitlab /></div>
                        <div className="h-6 w-6 mr-2 text-3xl"><FaGithub /></div>
                        <div className="h-6 w-6 mr-2 text-3xl text-[#2684FF]"><FaBitbucket /></div>
                    </div>
                </div>

                {/* START LEFT HERO IMAGE */}
                <div className="md:w-[37%] mt-8 md:mt-0">
                    <img src={images[1]} alt="Workspace Illustration" />
                </div>
                {/* END LEFT HERO IMAGE */}
            </div>
        </div>
    )
}

export default Hero