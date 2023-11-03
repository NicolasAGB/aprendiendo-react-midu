import './App.css'
import { TwiiterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwiiterFollowCard
                formatuserName={format}  userName="midudev" initialIsFollowing={true}>
                <strong>Miguel Angel Duran</strong>
            </TwiiterFollowCard>

            <TwiiterFollowCard
                formatuserName={format}
                userName="pheralb"  >
                Pablo Hernandez
            </TwiiterFollowCard>

            <TwiiterFollowCard
                formatuserName={format} userName="vxnder">
                Jose de lima
            </TwiiterFollowCard>
        </section>
    )
} 
