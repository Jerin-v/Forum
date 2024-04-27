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
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="content">Content</label><br />
                <textarea rows="5" cols="50" id="content" name="content" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>

        </div>
    )
}

export default CreatePost;