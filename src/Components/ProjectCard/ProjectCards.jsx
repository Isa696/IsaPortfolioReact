import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import Cards from "../Cards/Cards";
import "./ProjectCards.css"

function ProjectCards() {
    const url = `https://api.github.com/users/Isa696/repos`

    const [data, setData] = useState([]);
    const [dataSelected, setDataSelected] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('react');

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

    // filtered repos
    const filterData = useCallback((category) => {
        let newData = [];
        
        if (category === 'otros') {
            newData = data.filter((repo) => {
              const name = repo.name.toLowerCase();
              return !name.includes('react') && !name.includes('native') && !name.includes('js');
            });
          } else {
        newData = data.filter((repo) =>
            repo.name.toLowerCase().includes(category.toLowerCase())
        );
    }
        setDataSelected(newData);
    }, [data]); // Only recreate filterData if `data` changes

    useEffect(() => {
        filterData(selectedCategory);
    }, [selectedCategory, filterData]);

    return (
        <>

            <div className="btn-group d-flex justify-content-between" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="category" id="react" autoComplete="off" checked={selectedCategory === 'react'} onChange={() => setSelectedCategory('react')} />
                <label className={`btn ${selectedCategory === 'react' ? 'btn-light active' : 'btn-dark'}`} htmlFor="react">React</label>

                <input type="radio" className="btn-check" name="category" id="native" autoComplete="off" checked={selectedCategory === 'native'} onChange={() => setSelectedCategory('native')} />
                <label className={`btn ${selectedCategory === 'native' ? 'btn-light active' : 'btn-dark'}`} htmlFor="native">Native</label>

                <input type="radio" className="btn-check" name="category" id="js" autoComplete="off" checked={selectedCategory === 'js'} onChange={() => setSelectedCategory('js')} />
                <label className={`btn ${selectedCategory === 'js' ? 'btn-light active' : 'btn-dark'}`} htmlFor="js">JavaScript</label>

                <input type="radio" className="btn-check" name="category" id="otros" autoComplete="off" checked={selectedCategory === 'otros'} onChange={() => setSelectedCategory('otros')} />
                <label className={`btn ${selectedCategory === 'otros' ? 'btn-light active' : 'btn-dark'}`} htmlFor="otros">Otros</label>
            </div>

            <div className="row">
                {
                    <div className="loader"><i className="fa fa-spinner fa-spin fa-3x"></i></div>
                    &&
                    dataSelected.filter((repo) => repo.name !== "Isa696")
                        .map((repo) => (
                            <Cards repo={repo} key={repo.id} />
                        ))
                }
            </div>
        </>
    )
}

export default ProjectCards;