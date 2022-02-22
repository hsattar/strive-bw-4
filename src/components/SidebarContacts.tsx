import { InputAdornment, TextField } from '@mui/material'
import List from '@mui/material/List'
import SingleSidebarContact from './SingleSidebarContact'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function AlignItemsList() {
  return (
    <List className="sidebar-contacts">
        <TextField 
            placeholder="Search"
            variant="outlined" 
            size="small" 
            fullWidth 
            style={{ maxWidth: "90%", marginTop: ".5rem" }}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
        />
        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => <SingleSidebarContact /> ) }
    </List>
  )
}