import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SocialLink = () => {

  const links = [
    {
      id: 1,

      child: (

        <>Linkedin <FaLinkedin size={30} /></>
      ),

      href: 'https://www.linkedin.com/in/kartik-kumar-4656a5256/',
      style: 'rounded-tr-md'
    }

    ,


    {
      id: 2,

      child: (

        <>Github <FaGithub size={30} /></>
      ),

      href: 'https://github.com/Websterverse',

    }
    ,

    {
      id: 3,

      child: (

        <>Mail <HiOutlineMail size={30} /></>
      ),

      href: 'mailto:iamkingkarr@gmail.com',

    }
    ,
 {
    id: 4,
    child: (
        <>
            Resume <BsFillPersonLinesFill size={30} />
        </>
    ),
    href: '/MY_RESUME.pdf',
    style: 'rounded-br-md',
    download: true
}


  ]



  return (
    <div className=' hidden lg:flex flex-col fixed top-[35%] left-0  ' >
      <ul>

        {links.map(({ id, child, href, style, download }) => (

          <li key={id} className={`flex justify-between itens-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}  >
            <a href={href} download={download} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white' >

              {child}


            </a>

          </li>



        ))}



      </ul>
    </div>
  )
}

export default SocialLink
