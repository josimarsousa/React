import './styles/global.scss'
import { RepositoryList } from './components/RepositoryList'
import { Counter } from './components/Counter'

//componete do react
export function App() {
   return(
   //fragmento  
   <>
      <RepositoryList/>
      <Counter />
   </>
   )
}