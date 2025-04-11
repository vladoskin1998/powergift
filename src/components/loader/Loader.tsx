import { useEffect, useRef } from "react"
import './style.scss'
export const Loader = () => {
    let videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Auto-play was prevented:", error)
            })
        }
        return () => {
            videoRef.current = null
        }
    }, [])

    return (
        <div className="loader-page">
            <video
               width={150}
               height={150}
                autoPlay
                loop
                muted
                playsInline
                ref={videoRef}
                preload="metadata"
            >
                <source
                    src={`/Images/Power Gifts logo animate.gif.mp4`}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
