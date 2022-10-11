import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";
import useDarkMode from "@fisch0920/use-dark-mode";
import { useMemo } from "react";
import "./index.scss";
import "normalize.css/normalize.css";

type LayoutProps = React.PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    const { value } = useDarkMode();
    const backgroundMode = useMemo(() => value ? "dark" : "light", [value]);

    const background = useMemo(() => css(`
	background:
		url("/images/background/${backgroundMode}/bg_top_left.jpg") top left no-repeat,
		url("/images/background/${backgroundMode}/bg_top_right.jpg") top right no-repeat,
		url("/images/background/${backgroundMode}/bg_bottom_left.jpg") bottom left no-repeat,
		url("/images/background/${backgroundMode}/bg_bottom_right.jpg") bottom right no-repeat,
		url("/images/background/${backgroundMode}/bg_left.jpg") left center repeat-y,
		url("/images/background/${backgroundMode}/bg_right.jpg") right center repeat-y,
		url("/images/background/${backgroundMode}/bg_top.jpg") top center repeat-x,
		url("/images/background/${backgroundMode}/bg_bottom.jpg") bottom center repeat-x;
    `), [backgroundMode]);

    return (
        <>
            <Helmet titleTemplate="%s | Minecolonies" defaultTitle="Homepage | Minecolonies" />
            <div css={background}>
                <div style={{
                    padding: "3em"
                }}>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}