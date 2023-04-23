import './styles/index.scss';
import cn from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';
import { useAppDispatch, useAppSelector } from './providers/StoreProvider/hooks';

export default function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const userInited = useAppSelector(getUserInited);


    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, []);

    return (
        <div className={cn('app', theme)}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {
                        userInited && <AppRouter />
                    }
                </div>
            </Suspense>
        </div>
    );
}
