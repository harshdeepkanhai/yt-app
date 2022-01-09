import { useState, useEffect } from "react"
import youtube from "../apis/youtube"

const useVideos = defaultSearchTerm => {
    const [videos, setVideos] = useState([])

    useEffect(()=> {
        search(defaultSearchTerm)
    }, [])

    const search = async term => {
        const respone = await youtube.get('/search',{
            params: {
                q: term
            }
        })

        setVideos(respone.data.items)     
    }

    return [videos, search]
}

export default useVideos