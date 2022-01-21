import {useState, useEffect} from 'react';
import moment from 'moment';


const HomePage = () => {
    let [postData, setPostData] = useState([]);
    let [projData, setprojData] = useState([]);
  
    useEffect(() => {
      const loadContent = async () => {
        await fetch("https://ayubfarah.herokuapp.com/", {
          method: "GET",
          headers : {
            "Content-type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => {setPostData(data['postData']); setprojData(data['projData'])})
      }
  
      loadContent()
    }, [])
  

    return (
      <div className='indexDiv'>
            <div> 
                <h1 id='title'>Hi, I'm Ayub </h1>
                <h3 id='devDiv' >  I'm a developer </h3>
                <div>
                        <img alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="64" width="64"/>
                        <img alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="64" width="64"/>
                        <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="64" width="64"/>
                </div>
            </div>

            <div>
                <h2>Check out some of my projects</h2>
                <div className="projectDiv">
                    {
                        projData.map(({miniText, technologies, title, titleURL}) => {
                            return (
                                <div className="card" key={title}>
                                    <img className='projImage' src={`https://ayubfarah.herokuapp.com/images/${titleURL}.png`} alt={titleURL} height="200px"/>
                                    <p> <b>{title}</b>: {miniText} </p>
                                    <p>
                                        {technologies}
                                    </p>
                                    <a href={`http://github.com/ayubf/${titleURL}`}>Learn more...</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <h2>Some of my recent posts</h2>
                {
                    postData.map(({title, body, date, views, titleURL}) => {
                        return (
                            <div className="postDiv" key={titleURL}>
                                <a href={"/posts/"+titleURL} >{title}</a>
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

            <div className='contactDiv'>
                <h2>Contact me</h2>
                <p>
                    Don't hesitate to contact me if you want to discuss programming, Python libraries, JavaScript frameworks, or have any internship offers, advice or critique.
                </p>
                <a href='mailto:ayubaf04@gmail.com'>Email</a>
            </div>
      </div>
    );
}

export default HomePage

// const formattedDate = moment(dateFromDB).utc().format('DD/MM/YY')