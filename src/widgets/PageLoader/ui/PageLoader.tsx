import { useTranslation } from 'react-i18next';
import './PageLoader.scss';

export const PageLoader = () => {
    const { t } = useTranslation();
    return (
        <div className="PageLoader">
            <span className="loader">{t('Загрузка')}</span>
        </div>
    );
};
