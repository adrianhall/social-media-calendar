import { useSelector } from 'react-redux';
import { selectTheme } from './themeSlice';
import { FluentProvider, Theme, webLightTheme, webDarkTheme } from '@fluentui/react-components';

export type ThemeProviderProps = {
    children: React.ReactNode
}

const themeMap: { [key: string]: Theme } = {
    'light': webLightTheme,
    'dark': webDarkTheme
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children }) => {
    const theme = useSelector(selectTheme);

    return (
        <FluentProvider theme={themeMap[theme]}>
            {children}
        </FluentProvider>
    );
}

export default ThemeProvider;