import {useState, useEffect} from 'react';
import moment from 'moment';


const Post = (title: any) => {


    interface PostInterface {
        title: string, 
        date: string,
        body: string,
    }
    

    let [postData, setPostData] = useState<PostInterface>()

    useEffect(() => {

        const loadPost = async () => {
            await fetch(`https://ayubfarah.herokuapp.com/posts/${title.title}/`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => setPostData(data))

        }

        loadPost()

    }, [title.title])

    return (
        <div>
            <h1>{postData?.title}</h1>
            <h4>{moment(postData?.date).utc().format('MM/DD/YYYY')}</h4>
            <div>
                {postData?.body}
            </div>
        </div>
    )

}

export default Post;