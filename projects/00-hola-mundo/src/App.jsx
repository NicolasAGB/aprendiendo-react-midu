import './App.css'
import { TwiiterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwiiterFollowCard userName="midudev" name="Miguel Angel Duran" />
            <TwiiterFollowCard userName="pheralb" name="Pablo Hernandez" />
            <TwiiterFollowCard userName="elonmusk" name="Elon Musk" />
        </section>
    )
}