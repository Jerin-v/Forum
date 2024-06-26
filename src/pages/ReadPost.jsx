import React, { useState, useEffect} from "react";
import { supabase } from "/Users/jerin/Programming/Codepath/Github/Forum/client.js";
import Card from "../components/Card";

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
                    <Card id={post.id} created_at={post.created_at} title={post.title} author={post.author} key={index}/>
                ) : <h2>{'No Posts to see yet! :( '}</h2>
            }
        </div>
    )
}

export default ReadPost;