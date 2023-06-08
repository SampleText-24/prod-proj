import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/deprecated/Stack';
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slices/addNewCommentSlice';
import {
    useAddNewCommentError,
    useAddNewCommentText,
} from '../../model/selectors/addNewCommentSelectors';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewComment = ({ className, onSendComment }: AddNewCommentProps) => {
    const { t } = useTranslation();
    const text = useAddNewCommentText();
    const error = useAddNewCommentError();
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <HStack
                data-testid="AddNewComment"
                justify="between"
                max
                className={classNames(cls.AddNewComment, {}, [className])}
            >
                <Input
                    data-testid="AddNewComment.Input"
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    data-testid="AddNewComment.Button"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddNewComment;
