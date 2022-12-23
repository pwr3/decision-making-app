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
    Typography,
} from "@mui/material";

const MuiChip = styled(Chip)(() => ({
    borderRadius: "5px",
}));

const MuiList = styled(List)(() => ({
    border: "1px solid #e5e5e5",
    borderRadius: "5px",
    paddingTop: 0,
    paddingBottom: 0,
}));

const MuiListItem = styled(ListItem)(() => ({
    padding: 0,
}));

const MuiListItemButton = styled(ListItemButton)(() => ({}));

const Item = ({ issue }) => {
    return (
        <MuiListItem>
            <MuiListItemButton to={"/issues/" + issue.id} component={NavLink}>
                <ListItemText>
                    <Typography>{issue.title}</Typography>
                </ListItemText>
                {issue.optionNum ? (
                    <MuiChip label={issue.optionNum} size="small" />
                ) : null}
            </MuiListItemButton>
            <Divider />
        </MuiListItem>
    );
};
const CustomList = ({ issues }) => {
    return (
        <MuiList>
            {issues.map((issue) => (
                <Item issue={issue} key={issue.id} />
            ))}
        </MuiList>
    );
};

export default CustomList;
