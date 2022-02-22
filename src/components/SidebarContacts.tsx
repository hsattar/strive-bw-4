import { InputAdornment, TextField } from '@mui/material'
import List from '@mui/material/List'
import SingleSidebarContact from './SingleSidebarContact'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useSelector } from 'react-redux'

export default function AlignItemsList() {

    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)

    return (
        <List className="sidebar-contacts">
            <TextField 
                placeholder="Search"
                variant="outlined" 
                size="small" 
                fullWidth 
                style={{ maxWidth: "90%", marginTop: "0rem", marginBottom: ".5rem" }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchOutlinedIcon color="disabled" />
                        </InputAdornment>
                    ),
                    }}
            />
            { currentUser.conversations.map((user: any) => <SingleSidebarContact contact={user} /> ) }
        </List>
    )
}