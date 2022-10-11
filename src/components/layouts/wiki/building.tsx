import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { BuildingData, isValidBuilding } from "../../../data/building";
import NotFoundPage from "../../../pages/404";
import DefaultLayout from "./default";

interface BuildingLayoutProps extends React.PropsWithChildren {
    building: string;
}

export default function BuildingLayout({ building, children }: BuildingLayoutProps) {
    const buildingData = useMemo(() => {
        if (isValidBuilding(building)) {
            return BuildingData[building];
        }
        return undefined;
    }, [building]);

    return (
        <DefaultLayout>
            {buildingData ? (
                <>
                    <Helmet title={buildingData.name} />
                    <h1>{buildingData.name}</h1>
                    {children}
                </>
            ) : (
                <NotFoundPage />
            )}
        </DefaultLayout>
    );
}