import { useEffect, useRef } from 'react'
import { baseURL } from '../../utils/utils'
import './style.scss'
import GiftsSvg from './gifts'
import { Link } from 'react-router-dom'

const Page503 = () => {
    let videoRef = useRef<HTMLVideoElement | null>(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Auto-play was prevented:', error)
            })
        }
        return () => {
            videoRef.current = null
        }
    }, [])
    return (
        <div className="page503">
            <div className="page503-text">
                <h1>503</h1>
                <p>Сторінка знаходиться </p>
                <p>в розробці!</p>
                <Link to="/">
                    <button className="card-desc-info-order-ord  page503-button">
                        <button className="card-desc-info-order-ord-b1">Повернутися на головну</button>{' '}
                        <div className="page503-button-gift">
                            <GiftsSvg />
                        </div>
                    </button>
                </Link>
                <div className="page503-img-1">
                    <img src="/Images/lightning.png" alt="" />
                </div>
            </div>

            <video className="catalog-main-back" autoPlay loop muted playsInline ref={videoRef} preload="metadata">
                <source src={baseURL + `/Images/Coub.mp4`} type="video/mp4" />
            </video>
            <div className="page503-img">
                <img src="/Images/503.png" alt="" />
            </div>
        </div>
    )
}

export default Page503
