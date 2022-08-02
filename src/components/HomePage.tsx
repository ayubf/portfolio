/* eslint-disable react/jsx-no-target-blank */
import Pdf from '../static/CV_AF.pdf';
import Png from '../static/banner.png';

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


    let projData = [
        {
            "title": "Wink",
            "miniText": "Full-stack social web app",
            "summary": "Written in TypeScript, using React & Express",
            "technologies": "typescript react express mongodb".split(' ')
        },
        {
            "title": "Qwill",
            "miniText": "Social networking site frontend",
            "summary": "Written in JavaScript, using React",
            "technologies": "javascript react".split(' ')
        },
        {
            "title": "2Do",
            "miniText": "To-do List Maker",
            "summary": "Written in Javascript, using Electron",
            "technologies": "javascript electron".split(' ')
            
        },

    ]
  

    return (
      <div className='indexDiv'>
            <div> 
                <h1 id='title'>Hi, I'm Ayub! </h1>
                <h3 id='devDiv' >  I'm a developer </h3>
            </div>

           {projData.length !== 0 &&  <div>
                <h2>Check out some of my projects...</h2>
                <div className="projectDiv">
                    {
                        projData.map(({miniText, summary, title, technologies}) => {
                            return (
                                <div className="card" key={title}>
                                    <p> <b>{title}</b>: {miniText} </p>
                                    <p>
                                        {summary}
                                    </p>
                                    {(technologies as Array<string>).map((i: string) => {return tech[i as keyof Object]})} <br />
                                    <a href={`http://github.com/ayubf/${title.toLowerCase().replace(' ', '-')}`}>Learn more...</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>}

        
            <div className='contactDiv'>
                <h2> <a href="mailto:ayubaf04@gmail.com">Contact Me</a></h2>
                <p>
                    Don't hesitate to contact me if you want to discuss programming, Python libraries, JavaScript frameworks, or have any internship offers, advice or critique.
                </p>
            </div>

            <div className='footerDiv'>
                <p>Designed and built by Ayub Farah, 2021</p>
                <p>Written in TypeScript with React</p>
                <div>
                    <a href="https://github.com/ayubf">Github</a> • <a href="https://www.linkedin.com/in/ayub-farah-15b278217/">Linkedin</a> • <a href="https://dev.to/ayubf">DEV</a> • <a href={Pdf} target="_blank">Resume</a>
            </div>
	</div>
      </div>
    );
}

export default HomePage

