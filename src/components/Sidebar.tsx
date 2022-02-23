import SidebarConversations from "./SidebarConversations"
import SidebarHeader from "./SidebarHeader"
import { useSelector } from "react-redux"
import SidebarUserProfiles from "./SidebarUserProfiles"
import ProfileSettings from "./ProfileSettings"

export default function Sidebar() {

    const currentlyViewing = useSelector((state: IReduxStore) => state.sidebar.currentlyViewing)

    return (
        <>
        <SidebarHeader />
        { currentlyViewing === 'conversations' &&  <SidebarConversations /> }
        { currentlyViewing === 'users' &&  <SidebarUserProfiles view='users' /> }
        { currentlyViewing === 'new-message' &&  <SidebarUserProfiles view='new-message' /> }
        { currentlyViewing === 'settings' &&  <ProfileSettings /> }
        </>
    )
}
