import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "../Cards/Cards";
import "./ProjectCards.css"

function ProjectCards() {
    const url = `https://api.github.com/users/Isa696/repos`

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data);
            } catch (error) {
                console.log('Error:', error);
            }
        }
        fetchData();
    }, [url])

    return (
        <>
            <div className="row">
                {
                    <div className="loader"><i className="fa fa-spinner fa-spin fa-3x"></i></div>
                    &&
                    data.filter((repo) => repo.name !== "Isa696")
                        .map((repo) => (
                          <Cards repo={repo} key={repo.id} />
                        ))
                    }
                
            </div >
        </>
    )
}

export default ProjectCards;