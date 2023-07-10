import { Fragment } from "react"
import MainNavigation from "../components/MainNavigation"


const Error = () => {
    return(
        <Fragment>
            <MainNavigation />
            <main>
                <h2>Error 404</h2>
                <p>An Error occured please try again later</p>
            </main>
        </Fragment>
    )
}

export default Error