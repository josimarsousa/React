import { useState, useEffect} from "react";
import { RepositoryItem } from "./RepositoryItem";

//https://api.github.com/orgs/rocketseat/repos

const repository ={
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  console.log(repositories);
  
  return(
    <section className="repository-List">
      <h1>Lista de Repositorios</h1>

      <ul>
         <RepositoryItem 
          repository={repository}
         />
         <RepositoryItem 
          repository={repository}
         />
         <RepositoryItem 
           repository={repository}
         />
         <RepositoryItem 
           repository={repository}
         />         
      </ul>
    </section>
  )
}