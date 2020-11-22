import React from 'react';
import classNames from 'classnames';
import styles from '../styles/pagination.module.scss';

export interface Props {
    page: number;
    pages: number;
    handlePages: (page: number) => void;
}

export const PaginationComponent: React.FC<Props> = ({
    page,
    pages,
    handlePages,
}) => {
    return (
        <div className={styles.paginationWrapper}>
            {page !== 1 && (
                <button
                    onClick={() => handlePages(page - 1)}
                    type="button"
                    className={classNames([styles.pageItem, styles.sides].join(' '))}
                >
                    &lt;
                </button>
            )}
            <button
                onClick={() => handlePages(1)}
                type="button"
                className={classNames(styles.pageItem, {
                    [styles.active]: page === 1,
                })}
            >
                {1}
            </button>
            {page > 3 && <div className={styles.separator}>...</div>}
            {page === pages && pages > 3 && (
                <button
                    onClick={() => handlePages(page - 2)}
                    type="button"
                    className={styles.pageItem}
                >
                    {page - 2}
                </button>
            )}
            {page > 2 && (
                <button
                    onClick={() => handlePages(page - 1)}
                    type="button"
                    className={styles.pageItem}
                >
                    {page - 1}
                </button>
            )}
            {page !== 1 && page !== pages && (
                <button
                    onClick={() => handlePages(page)}
                    type="button"
                    className={[styles.pageItem, styles.active].join(' ')}
                >
                    {page}
                </button>
            )}
            {page < pages - 1 && (
                <button
                    onClick={() => handlePages(page + 1)}
                    type="button"
                    className={styles.pageItem}
                >
                    {page + 1}
                </button>
            )}
            {page === 1 && pages > 3 && (
                <button
                    onClick={() => handlePages(page + 2)}
                    type="button"
                    className={styles.pageItem}
                >
                    {page + 2}
                </button>
            )}
            {page < pages - 2 && <div className={styles.separator}>...</div>}
            <button
                onClick={() => handlePages(pages)}
                type="button"
                className={classNames(styles.pageItem, {
                    [styles.active]: page === pages,
                })}
            >
                {pages}
            </button>
            {page !== pages && (
                <button
                    onClick={() => handlePages(page + 1)}
                    type="button"
                    className={[styles.pageItem, styles.sides].join(' ')}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};