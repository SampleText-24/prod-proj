import React from 'react';
import './styles/index.scss'

import { classNames } from "shared/lib/classnames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Поменять тему</button>
        </div>
    );
};

export default App;