import SidebarContacts from "./SidebarContacts"
import SidebarHeader from "./SidebarHeader"
import { useSelector } from "react-redux"
import SidebarUserProfiles from "./SidebarUserProfiles"

export default function Sidebar() {

    const currentlyViewing = useSelector((state: IReduxStore) => state.conversations.currentlyViewing)

    return (
        <>
        <SidebarHeader />
        { currentlyViewing === 'conversations' &&  <SidebarContacts /> }
        { currentlyViewing === 'users' &&  <SidebarUserProfiles currentlyViewing="users" /> }
        { currentlyViewing === 'new-message' &&  <SidebarUserProfiles currentlyViewing="new-message" /> }
        </>
    )
}
