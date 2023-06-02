import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction: (theme: Theme) => void) => {
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

        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.DARK,
        toggleTheme,
    };
}
