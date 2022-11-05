import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <div className="flex bg-white p-5">
            <FontAwesomeIcon icon={faEarthAmericas} size="2xl" />
            <h2 className="text-8x">Hello from navbar</h2>
        </div>
    )
}
