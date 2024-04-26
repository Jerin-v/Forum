import React, { useState, useEffect} from "react";
import { supabase } from "../client";

const ReadPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
                .from('Forum')
                .select()
                .order('created_at', {ascending: true})
            setPosts(data);
        }
        fetchPost();
    },[])

    return (
        <div className="ReadPost">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                    <Card id={post.id} title={post.title} author={post.author} description={post.description} key={index}/>
                ) : <h2>{'No Posts to see yet! :( '}</h2>
            }
        </div>
    )
}