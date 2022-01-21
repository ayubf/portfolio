import {useState, useEffect} from 'react';
import moment from 'moment';

const Posts = () => {

    let [postData, setPostData] = useState([]);

    useEffect(() => {

        const loadPosts = async () => {
            await fetch('https://ayubfarah.herokuapp.com/posts/', {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => setPostData(data))
        }

        loadPosts()

    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                    postData.map(({title, body, date, views, titleURL}) => {
    
                        return (
                            <div className="postDiv" key={titleURL}>
                                <a href={"/posts/"+title} >{title}</a>
                                <p>

                                    {
                                        (body as string).split(" ").slice(0, 20).join(" ")
                                    }

                                </p>
                                <p>Date: {moment(date['$date']).utc().format('MM/DD/YYYY')} </p>
                                <p>Views: {views}</p>
                            </div> 
                        )
                    })
            }
        </div>
    )
}

export default Posts