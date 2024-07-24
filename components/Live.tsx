import React from 'react'
import LiveCursor from './cursor/LiveCursor';
import { useOthers } from "@/liveblocks.config";

const Live = () => {
    const others = useOthers();
    return (
        <div>
            <LiveCursor others={others}/>
        </div>
    )
}

export default Live
