import React from "react";
import { Helmet } from "react-helmet";

type DefaultLayoutProps = React.PropsWithChildren;

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Helmet titleTemplate="%s | Minecolonies Wiki" defaultTitle="Homepage" />
            {children}
        </>
    );
}