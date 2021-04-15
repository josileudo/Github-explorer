import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"

const repository= {
  name: "unforme2",
  description: "first aplication",
  link: "https://github.com/unform/unform" 
}

export function RepositoryList(){
  return (
    <section className = "repository-list" >
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository = {repository}/>
        <RepositoryItem repository = {repository}/>
        <RepositoryItem repository = {repository}/>
        <RepositoryItem repository = {repository}/>
      </ul>
    </section>
  )
}