import { Grid } from '@material-ui/core';
import * as React from 'react';
import AutoPowerOfAttorney from './AutoPowerOfAttorney';

interface Doc {
    code: string;
    name: string;
}

const Forms = (doc: Doc) => {

    switch (doc.code) {
        case "power_Of_attorney_auto": {
            return <AutoPowerOfAttorney />;
        } default: {
            return <></>
        }
    }
}

export default Forms;