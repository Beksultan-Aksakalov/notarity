import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { RouteComponentProps, Route, withRouter } from "react-router-dom";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";
import { history } from '../core/helpers/history';

interface Props extends RouteComponentProps<any> {
    label: any,
    icon: OverridableComponent<SvgIconTypeMap>,
    children: any,
    to: any,
    activeOnlyWhenExact: bool,
    history: any
}

const NavLink = (props: Props) => {

    return (
        <Route
            path={props.to}
            exact={props.activeOnlyWhenExact}
            children={({ match }) => (
                <ListItem
                    onClick={() => {
                        history.push(props.to);
                    }}
                    button
                    selected={Boolean(match)}
                >
                    <ListItemIcon>{props.icon}</ListItemIcon>
                    <ListItemText>{props.children}</ListItemText>
                </ListItem>
            )}
        />
    );
}

export default withRouter(NavLink);