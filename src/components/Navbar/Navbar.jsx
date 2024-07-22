import { Button, Navbar } from 'flowbite-react'
import images from '../../assets/images'

const Nav = () => {
    return (
        <div className='container'>
            <Navbar fluid rounded>
                <Navbar.Brand href="">
                    <img src={images[0]} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='bg-[#12100C] w-24 rounded-xl'>Login</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='text-bl'>Home</Navbar.Link>
                    <Navbar.Link href="#" className='text-bl'>Features</Navbar.Link>
                    <Navbar.Link href="#" className='text-bl'>Pricing</Navbar.Link>
                    <Navbar.Link href="#" className='text-bl'>Blog</Navbar.Link>
                    <Navbar.Link href="#" className='text-bl'>Changelog</Navbar.Link>
                    <Navbar.Link href="#" className='text-bl'>We`re hiring</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Nav