import { useState, useEffect} from "react";
import { RepositoryItem } from "./RepositoryItem";
//https://api.github.com/orgs/rocketseat/repos

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

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
      {repositories.map(repository => {
        return <RepositoryItem key={repository.name} repository={repository} />
      })}
             
      </ul>
    </section>
  )
}