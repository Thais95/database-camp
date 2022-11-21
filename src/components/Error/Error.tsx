import { Link } from "react-router-dom"
import { ErrorContainer } from "./Error.styled"


export const Error = () => {
  return (
    <ErrorContainer>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <Link to={'/home'}>Volte ao início</Link>
    </ErrorContainer>
  )
}
