import React, { useState } from "react";
import { supabase } from "../../client";

const CreatePost = () => {
    const [post, setPost] = useState({title: "", author: "", content: ""})

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Forum')
            .insert({title: post.title, author: post.author, content: post.content})
            .select()

            window.location = "/"
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>

        </div>
    )
}