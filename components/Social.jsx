import Link from "next/link";
import {FaTwitter , FaGithub, FaLinkedin} from "react-icons/fa";

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL;

const socials = [
    {icon : <FaGithub/>, path : {GITHUB_URL}},
    {icon : <FaLinkedin/>, path : {LINKEDIN_URL}},
    // {icon : <FaTwitter/>, path : ""}
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social