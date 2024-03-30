import { BounceLoader } from "react-spinners";

export default function Spinner() {
    return (
        <BounceLoader color={'rgb(30 58 138 / var(--tw-bg-opacity))'}
            speedMultiplier={2} />
    )
}