import { useEffect,useState } from "react"

const TopBar = () => {

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


    return(
        <div>
            <a id='nameLink' href="/">Ayub Farah</a>  <a href="/about">About </a> {projData.length !== 0 && <a href="/projects">- Projects</a>}
        </div>
    )
}

export default TopBar
