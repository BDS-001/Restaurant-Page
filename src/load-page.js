import { homepage } from "./homepage"
import { header } from "./header"

export default function initialLoad() {
    header.renderHeader()
    homepage.renderHomepage()
}