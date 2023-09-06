import { useEffect, useState } from "react";

const initialData = [
	{
		id: 1,
		name: 'Shu',
		height: 173,
		game: 'Valorant',
		isMale: true,
	},
	{
		id: 2,
		name: 'Elira',
		height: 160,
		game: 'RPG',
		isMale: false,
	},
	{
		id: 3,
		name: 'Sonny',
		height: 180,
		game: 'Project Zomboid',
		isMale: true,
	},
	{
		id: 4,
		name: 'Enna',
		height: 150,
		game: 'Hand Cam',
		isMale: false,
	},
];

function Niji() {
	/* ---------- Hook ---------- */
	const [data, setData] = useState(initialData);
	const [addName, setAddName] = useState('');
	const [height, setHeight] = useState('');
	const [addGame, setAddgame] = useState('');
	const [total, setTotal] = useState(0);
	// -----待修----- const [gender, setGender] = useState('');
	// useEffect語法：useEffect(() => { callbackFunction }, [ 條件 ])
	useEffect(() => {
		// 做數字加總
		/* 拆解過程
		const total = data.reduce((pre, curr) => {
			return pre + curr.height;
		}, 0)
		console.log(total);*/
		setTotal(data.reduce((pre, curr) =>  pre + curr.height, 0))
	}, [data])  // data改變時同步改變加總
	
	/* ---------- CSS ---------- */
	const center = { textAlign: 'center', verticalAlign: 'middle', padding: '4px 8px', border: '1px solid #000', };
	/* ---------- Render ---------- */
	return (<>
		<h1>Niji</h1>
		{/* ---------- 新增資料功能 ---------- */}
		<label htmlFor="name">Name：</label>
		<input type="text" name="" id="name" value={addName} onChange={(e) => {
			setAddName(e.target.value);
		}} />{'　'}
		<label htmlFor="height">Height：</label>
		<input type="number" name="" id="height" value={height} onChange={(e) => {
			setHeight(Number(e.target.value));
		}} />
		{height} / {typeof height}<br />
		<label htmlFor="game">Game：</label>
		<input type="text" name="" id="game" value={addGame} onChange={(e) => {
			setAddgame(e.target.value);
		}} />
		{/*-----待修----- <form>
			<input type="radio" name="gender" id="isMale" value={gender} onChange={(e) => {
				setGender(e.target.value);
			}} />
			<label htmlFor="isMale">Male</label>
			<input type="radio" name="gender" id="isMale" value={gender} onChange={(e) => {
				setGender(e.target.value);
			}} />
			<label htmlFor="isMale">Female</label>
		</form> */}{'　'}
		<button type="submit" onClick={(e) => {
			{/* 錯誤寫法，會出錯(push在推的時候會得到錯誤的索引值)
			setData(data.push({
				name: addName,
				height: height,
				game: addGame,
			}))*/}
			setData([
				...data,
				{
					id: new Date().getTime(),		// 利用時序取得獨一id
					name: addName,
					/*height: */height,					// 因為相同所以省略
					game: addGame,
				},
			]);
			// 清空輸入框
			setAddName('');
			setHeight('');
			setAddgame('');
			console.log(data);
			/* 錯誤寫法：React不能這樣寫總計
			sum();*/
		}}>Submit</button>
		{/* ---------- 完整資料表格 ---------- */}
		<table>
			<thead><tr>
				<th style={center}>Name</th>
				<th style={center}>Height</th>
				<th style={center}>Game</th>
				<th style={center}>Male</th>
				<th style={center}>Edit</th>
			</tr></thead>
			<tbody>
				{data.map((item) => {
					return (<tr key={item.id}>
						<td style={center}>{item.name}</td>
						<td style={center}>{item.height}</td>
						<td style={center}>{item.game}</td>
						<td style={center}>{item.isMale ? 'O' : 'X'}</td>
						{/* ---------- 資料刪除功能 ---------- */}
						<td style={center}><button onClick={() => {
							/* 拆解過程
							// const newData = [...data]		// ES6 淺層複製，確保資料與原本的不同
							const newData = data.filter((newItem) => {	// filter出要保留的資料
								// item.id是當前選擇的按鈕
								return newItem.id !== item.id		// newItem.id === item.id 被剃除	
								// filter出內外id不同的資料來保留；換之，內外id相同的要被刪除
							});
							setData(newData);*/
							setData(data.filter((newItem) => newItem.id !== item.id));
						}
						}>Delete</button></td>
					</tr>
					)
				})}
			</tbody>
		</table>
		Total：{total}
	</>)
}

export default Niji;