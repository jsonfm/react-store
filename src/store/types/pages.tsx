import React from "react";
import { ApplicationAction } from "../actions";
import { ApplicationState } from "./state";


export interface PageProps {
    state: ApplicationState;
    dispatch?: React.Dispatch<ApplicationAction>;
    ctx?: React.Context<ApplicationState>;
}
