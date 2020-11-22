import React from 'react'
import styles from '../styles/table.module.scss'
import { PaginationComponent } from './PaginationComponent'

export interface Props {
    loading: boolean,
    Pagination: typeof PaginationComponent,
    data: { id: 0, title: '', body: '' }[],
    page: number;
    pages: number;
    handlePages: (page: number) => void;
}

export const TableComponent: React.FC<Props> = ({ loading, Pagination, data, page, pages, handlePages }) => {
    return (
        <>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center' }}>Loading...</div> : <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Conteúdo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(i =>
                            <tr key={i.id}>
                                <td>{i.id}</td><td>{i.title.substring(0, 30)}</td><td>{i.body.substring(0, 100) + ' ...'}</td>
                            </tr>)}
                    </tbody>
                </table>
                <Pagination
                    page={page}
                    pages={pages}
                    handlePages={handlePages} />
            </div>}
        </>
    );
};