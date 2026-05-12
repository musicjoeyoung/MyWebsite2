import { createContext, useContext, useMemo, useState } from "react";

export type ViewStyle = "original" | "ai";

interface ViewStyleContextValue {
    viewStyle: ViewStyle;
    toggleViewStyle: () => void;
}

const ViewStyleContext = createContext<ViewStyleContextValue | undefined>(undefined);

export const ViewStyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [viewStyle, setViewStyle] = useState<ViewStyle>("original");

    const toggleViewStyle = () =>
        setViewStyle((prev) => (prev === "original" ? "ai" : "original"));

    const value = useMemo<ViewStyleContextValue>(
        () => ({ viewStyle, toggleViewStyle }),
        [viewStyle]
    );

    return <ViewStyleContext.Provider value={value}>{children}</ViewStyleContext.Provider>;
};

export const useViewStyle = (): ViewStyleContextValue => {
    const ctx = useContext(ViewStyleContext);
    if (!ctx) throw new Error("useViewStyle must be used within a ViewStyleProvider");
    return ctx;
};
