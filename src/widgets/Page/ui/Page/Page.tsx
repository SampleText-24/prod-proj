import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollSaveByPath(state, location.pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: location.pathname,
            }),
        );
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const style = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.PageRedesigned,
        off: () => cls.Page,
    });

    return (
        <main
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(style, {}, [className])}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
});
