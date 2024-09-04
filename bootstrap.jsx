import React from "react";
import { render } from "react-dom";
import { Suspense } from "react";
import AixonApp from 'aixon/MFEAixonApp';

console.log(document.getElementById('app'));

render(
    <div>
        <Suspense fallback="Loading">
            <AixonApp />
        </Suspense>
    </div>,
        document.getElementById('app'),
);