import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme():UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.AQUA;
            break;
        case Theme.AQUA:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.DARK;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.DARK,
        toggleTheme,
    };
}
