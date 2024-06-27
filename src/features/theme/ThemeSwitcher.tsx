import { WeatherSunnyRegular, WeatherMoonRegular } from '@fluentui/react-icons';
import { makeStyles } from '@fluentui/react-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, switchTheme } from './themeSlice';

const useStyles = makeStyles({
    icon: {
        padding: '0.5em',
        fontSize: '2em',
        color: 'white'
    }
});

const ThemeSwitcher: React.FunctionComponent = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    const classes = useStyles();

    console.log(`Re-render: theme = ${theme}`)

    const themeIcon = theme == 'light' ? <WeatherSunnyRegular className={classes.icon} /> : <WeatherMoonRegular className={classes.icon} />;

    return (
        <div id="themeSwitcher" onClick={() => dispatch(switchTheme())}>
            {themeIcon}
        </div>
    )
};

export default ThemeSwitcher;
