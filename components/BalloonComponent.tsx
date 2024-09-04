import React from 'react'
import Image from "next/image";

type Props = {
    degrees: number
}

const BalloonComponent = ({ degrees }: Props) => {
    return (
        <div className='rocket-shadow'>
            <Image  src={'/balloon.png'} alt={''} width={75} height={75} style={{
                transform: `rotate(${degrees / 3}deg)`,
                transition: 'all',
                animationDuration: '10ms'
            }}/>
        </div>
    )
}

export default BalloonComponent;