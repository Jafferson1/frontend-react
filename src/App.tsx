import React, { useState, useEffect } from 'react'
import './App.scss'
import api from './http/api'
import { PaginationComponent } from './components/PaginationComponent'
import { TableComponent } from './components/TableComponent'

const App: React.FC = () => {
	
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [respData, setRespData] = useState({ data: [], pages: 0 });
	const handlePages = async (updatePage: number) => {
		setCurrentPage(updatePage);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const [res] = await Promise.all([
					api.get(`posts?_format=json&access-token=xxx&page=${currentPage}`),
				]);
				let arr = res.data.data;
				let pages = res.data.meta.pagination.pages;
				setRespData({ data: arr, pages: pages });
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [currentPage]);

	return (
		<div className='App'>
			<h2>Últimas postagens</h2>
			<TableComponent loading={loading} Pagination={PaginationComponent} data={respData.data} page={currentPage}
				pages={respData.pages}
				handlePages={handlePages} />
		</div>
	)
}

export default App
