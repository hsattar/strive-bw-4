import SidebarConversations from "./SidebarConversations"
import SidebarHeader from "./SidebarHeader"
import { useSelector } from "react-redux"
import SidebarUserProfiles from "./SidebarUserProfiles"

export default function Sidebar() {

    const currentlyViewing = useSelector((state: IReduxStore) => state.sidebar.currentlyViewing)

    return (
        <>
        <SidebarHeader />
        { currentlyViewing === 'conversations' &&  <SidebarConversations /> }
        { currentlyViewing === 'new-message' &&  <SidebarUserProfiles /> }
        </>
    )
}
