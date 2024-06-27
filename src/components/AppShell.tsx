import { makeStyles, tokens } from '@fluentui/react-components';
import Header from './Header';

export interface AppShellProps {
    children?: React.ReactNode
}

const useStyles = makeStyles({
    fullPage: {
        display: 'flex',
        flexFlow: 'column nowrap',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    header: {
        order: 0,
        minHeight: '4em',
        width: '100%',
        backgroundColor: tokens.colorBrandBackground
    },
    content: {
        order: 1,
        flexGrow: 1,
        width: '100%',
        backgroundColor: tokens.colorNeutralBackground1
    },
    footer: {
        order: 2,
        minHeight: '3em',
        width: '100%',
        backgroundColor: tokens.colorNeutralBackgroundStatic
    }
});

const AppShell: React.FunctionComponent<AppShellProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.fullPage}>
            <div className={classes.header}><Header /></div>
            <div className={classes.content}>{children}</div>
            <div className={classes.footer}></div>
        </div>
    );
};

export default AppShell;