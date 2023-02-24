import React from 'react'
import "./Me.css"
import { AnirudhLogo } from '../../assets/export'
import { socials } from '../../assets/export'

function Me() {
  return (
    <div className='MeContainer'>
        <div className="mainLogo">
            <img src={AnirudhLogo} alt="AnirudhLogo" />
        </div>

        <div className="skills">
            <span className="skillPara 1">Afficianado</span>
            

        </div>
        <div className="socialLogo">
            <a href="">

                {socials.map((src,index)=>(
                    <img src={src.src} alt="socials" className = {`socialLogo ${index}`}/>
                ))}

            </a>
        </div>

        
    </div>
  )
}

export default Me