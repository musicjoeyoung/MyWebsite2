import { createContext, useContext, useEffect, useMemo, useState } from "react";

type SiteTheme = "dev" | "music";

interface ThemeContextValue {
    theme: SiteTheme;
    setTheme: (next: SiteTheme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const getInitialTheme = (): SiteTheme => {
        try {
            const stored = localStorage.getItem("site-theme");
            if (stored === "dev" || stored === "music") return stored;
        } catch (error) {
            console.error(error)
        }
        if (typeof window !== "undefined") {
            return window.location.pathname.includes("/music") ? "music" : "dev";
        }
        return "dev";
    };

    const [theme, setThemeState] = useState<SiteTheme>(getInitialTheme);

    useEffect(() => {
        try {
            localStorage.setItem("site-theme", theme);
        } catch (error) {
            console.error(error)
        }

        // Update the theme-color meta tag for mobile status bar
        const updateThemeColor = () => {
            const color = theme === "music" ? "#000000" : "#073b4c";

            let themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (!themeColorMeta) {
                themeColorMeta = document.createElement('meta');
                themeColorMeta.setAttribute('name', 'theme-color');
                document.head.appendChild(themeColorMeta);
            }
            themeColorMeta.setAttribute('content', color);

            // Also update apple-mobile-web-app-status-bar-style for iOS
            let appleStatusMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
            if (!appleStatusMeta) {
                appleStatusMeta = document.createElement('meta');
                appleStatusMeta.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
                document.head.appendChild(appleStatusMeta);
            }
            appleStatusMeta.setAttribute('content', 'default');
        };

        updateThemeColor();
    }, [theme]);

    const setTheme = (next: SiteTheme) => {
        setThemeState(next);
    };

    const toggleTheme = () => {
        setThemeState((prev) => (prev === "dev" ? "music" : "dev"));
    };

    const value = useMemo<ThemeContextValue>(
        () => ({ theme, setTheme, toggleTheme }),
        [theme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
    return ctx;
};


