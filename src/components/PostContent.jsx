import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {supabase } from '/Users/jerin/Programming/Codepath/Github/Forum/client.js'

const PostContent = () => {
    let { id } = useParams();
    const [postContent, setPostContent] = useState(null);

    useEffect(() => {
        const postContent = async () => {
            const {data} = await supabase
                .from('Forum')
                .select()
                .eq('id',id)
            
            if (data) setPostContent(data[0]);
        }
        postContent();
    }, [id])

    return (
        <div>
            {postContent && (
                <div>
                    <h1>{postContent.title}</h1>
                    <h3>{postContent.author}</h3>
                    <p>{postContent.content}</p>
                </div>
            )}
        </div>
    )
}

export default PostContent;