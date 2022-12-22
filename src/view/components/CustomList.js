import React from "react";
import { NavLink } from "react-router-dom";
import {
    Chip,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    styled,
    Typography
} from "@mui/material";

// const NavLink = React.forwardRef((props, ref) => (
//     <ReactNav
//         ref={ref}
//         {...props}
//         // style={({isActive}) => isActive ? activeStyle : undefined}
//     />
// ));

const MuiChip = styled(Chip)(() => ({
    borderRadius: '5px',
    // border: '1px solid red',
}))

const MuiList = styled(List)(() => ({
    border: '1px solid #e5e5e5',
    borderRadius: '5px',
    paddingTop: 0,
    paddingBottom: 0,
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
}));

const MuiListItem = styled(ListItem)(() => ({
    padding: 0
    // backgroundColor: 'green'
}));

const MuiListItemButton = styled(ListItemButton)(() => ({
    // backgroundColor: 'green'
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
}))


const Item = ({issue}) => {
    return (

            <MuiListItem
                // component={NavLink}
                // activeClassName={({ isActive }) =>
                //     isActive ? { textDecoration: "underline" } : undefined
                //     // isActive ? { fontWeight: '900' } : undefined
                // }
                // // sx={{ color: '#8C8C8C' }}
                // to={'/issues/'+issue.id}
            >
                <MuiListItemButton to={'/issues/'+issue.id} component={NavLink}>
            {/*<NavLink style={({ isActive }) =>*/}
            {/*    isActive ? { textDecoration: "underline" } : undefined*/}
            {/*} to={'/issues/'+issue.id}>*/}
                    <ListItemText>
                        <Typography>{issue.title}</Typography>
                    </ListItemText>
                    { issue.optionNum ? <MuiChip label={issue.optionNum} size='small'/> : null }
            {/*</NavLink>*/}
                </MuiListItemButton>
            <Divider />
        </MuiListItem>
    )
}
const CustomList = ({issues}) => {
    return (
        <MuiList>
            {issues.map((issue) => (<Item issue={issue} key={issue.id} />))}
        </MuiList>
    )
}

export default CustomList;