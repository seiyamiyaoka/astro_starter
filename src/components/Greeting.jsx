import {h} from 'preact'
import {useState}from 'preact/hooks'

export default function Greeting({ messages }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(randomMessage())
  
  return (
    <div>
      <h3>{greeting}! thank you for visiting</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        NewGreeting
      </button>
    </div>
  )
}