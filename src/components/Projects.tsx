import {useState, useEffect} from 'react';

const Projects = () => {

    let [projData, setProjData] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            await fetch('https://ayubfarah.herokuapp.com/projects/', {
                method: "GET",
                headers: {
                    'Content-type': "application/js"
                },

            })
            .then(res => res.json())
            .then(data => setProjData(data))
        }

        loadProjects()

    }, [])

    return (
        <div>
            <h1>Projects</h1>
            <div className="projectDiv">
                    {
                        projData.map(({miniText, technologies, title, titleURL}) => {
                            return (
                                <div className="card" key={title}>
                                    <img className='projImage' src={`https://ayubfarah.herokuapp.com/resources/${titleURL}.png`} alt={titleURL} height="200px"/>
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
    )
}

export default Projects