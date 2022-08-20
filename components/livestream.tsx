import { useLayoutEffect, useRef } from 'react';
import Plyr from 'plyr';
import Hls from 'hls.js';

const PlyrComponent = ({ playbackId }: any) => {
    const video: any = useRef();
    const playerInstance: any = useRef();

    useLayoutEffect(() => {
        function myHandler(e: any) {
            console.log('done')
        }
        const source = `https://cdn.livepeer.com/hls/${playbackId}/index.m3u8`;
        playerInstance.current = new Plyr(video.current);
        const hls = new Hls();

        hls.loadSource(source);
        hls.attachMedia(video.current);

        window.hls = hls;

        playerInstance.current.speed = 1
        video.current.addEventListener('ended',myHandler,false);
        
        return () => {
            playerInstance.current.destroy();
        };
    }, []);

    return <video id="player" ref={video} className="video-js" autoPlay={true} preload="auto"></video>;
};

export default PlyrComponent;