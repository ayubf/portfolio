import {useState, useEffect} from 'react';


const HomePage = () => {


    const tech = {
        "flask" : <img alt="flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height="48" width="48"/>,
        "react" : <img alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="48" width="48" />,
        "javascript": <img alt="javaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="48" width="48"/>,
        "typescript": <img alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="48" width="48" />,
        "electron": <img alt="electron" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" height="48" width="48"/>,
        "express": <img alt="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="48" width="48"/>,
        "python": <img alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="48" width="48"/>,
        "ruby": <img alt="ruby" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" height="48" width="48"/>,
        "rails": <img alt="rails" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" height="48" width="48"/>,
        "mongodb": <img alt="mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="48" width="48" />,
        "postgres": <img alt="posgtres" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="48" width="48"/>,
        "bootstrap": <img alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" height="48" width="48"/>

    }

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
        .then(data => {setprojData(data['projData'])})
      }
  
      loadContent()
    }, [])
  

    return (
      <div className='indexDiv'>
            <div> 
                <h1 id='title'>Hi, I'm Ayub! </h1>
                <h3 id='devDiv' >  I'm a developer </h3>
            </div>

            <div>
                <h2>Check out some of my projects...</h2>
                <div className="projectDiv">
                    {
                        projData.map(({miniText, summary, title, titleURL, technologies}) => {
                            return (
                                <div className="card" key={title}>
                                    <p> <b>{title}</b>: {miniText} </p>
                                    <p>
                                        {summary}
                                    </p>
                                    {(technologies as Array<string>).map((i: string) => {return tech[i as keyof Object]})} <br />
                                    <a href={`http://github.com/ayubf/${titleURL}`}>Learn more...</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        
            <div className='contactDiv'>
                <h2>Contact me</h2>
                <p>
                    Don't hesitate to contact me if you want to discuss programming, Python libraries, JavaScript frameworks, or have any internship offers, advice or critique.
                </p>
                <h4><a href='mailto:ayubaf04@gmail.com'>Email</a> <br /></h4>
                <h4><a href="https://ayubfarah.herokuapp.com/resources/CV_AF.pdf" download>Resume</a></h4>
            </div>
      </div>
    );
}

export default HomePage

