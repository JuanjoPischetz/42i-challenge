import { nonConstructibleChange } from "@/services/controllers"

const NonConstructibleChange = () => {
  return (
    <div>
        <h1>Non Constructible Change</h1>
        <span>{nonConstructibleChange([1,5,12,7,1])}</span>
    </div>
  )
}

export default NonConstructibleChange