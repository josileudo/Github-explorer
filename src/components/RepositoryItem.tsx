export function RepositoryItem(props){
  return (
    <li>
      <strong>{props.repository.name ?? "default"} </strong>
      <p>{props.repository.description ?? ""}</p>

      <a href={props.repository.html_url ?? ""}>
        Acessar Repositórios
      </a>          
    </li>
  )
}