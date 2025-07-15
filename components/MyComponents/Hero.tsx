import React from 'react'
import CtaBtns from './CtaBtns';
import { IconInfoHexagon, IconPng } from '@tabler/icons-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="hero">
        <div className="hero-content flex flex-col-reverse md:flex-row items-center justify-between">
            <div className='text-div px-10'>
                <h1>Putting Your Child’s Future in Motion</h1>
                <p>At Jharkhand Public School, we don’t just teach — we spark curiosity, build confidence, and shape values that last a lifetime.</p>
                <div className="CTA-btns  flex flex-col md:flex-row gap-4 mt-6">
                    <CtaBtns value='About us' color='blue' icon={<IconInfoHexagon size={20}/>}  />
                    <CtaBtns value='Apply for Admission' color='orange' icon={<IconPng size={20}/>}  />
                </div>
            </div>
            <div className='image-div'>
                {/* destop hero img */}
                <Image
                    src="/hero_img.jpg"
                    alt="Hero Image"
                    width={640}
                    height={720}
                    className='hero-image hidden md:block'
                    />
                    {/* phone hero img */}
                      <Image
                    src="/hero-img-pn.png"

                    alt="Hero Image"
                    width={640}
                    height={720}
                    className='hero-image md:hidden block '
                    />
            </div>
        </div>
    </header>
  )
}
