import axios from 'axios'
const fn = {
	getAnswer:async function(page){
		const {data} = await axios.get('../../../million-answer.json')
		const sIndex = Math.ceil(Math.random()*900)
		// this.writeDB(data.slice(sIndex,sIndex+10));
		// this.getData();
		return data.slice(sIndex,sIndex+10)
	},
	writeDB:(data)=>{
		const req = indexedDB.open('answer',1.0)
		let db;
		req.onsuccess=function(e){
			db = e.target.result;
			fn.insertData(db,data)
		}
		req.onerror=function(e){
			console.log(e);
		}
		req.onupgradeneeded=function(e){
			db = e.target.result
			const store = db.createObjectStore('answers',{keyPath:'id'})
			store.createIndex('id','id',{unique:true})
			store.createIndex('question','question',{unique:false})
			store.createIndex('option','option',{unique:false})
			const transaction = e.target.transaction
			transaction.oncomplete = function(){
				fn.insertData(db,data)
			}
		}
	},
	insertData:(db,data)=>{
		for(let answer of data){
			const answers = db.transaction(['answers'],'readwrite').objectStore('answers')
			const req = answers.add(answer)
			req.onsuccess = function(){
				console.log('插入成功',answer);
			}
			req.onerror = function(e){
				console.log('插入失败',e);
			}
		}
		
	},
	getData:()=>{
		const req = indexedDB.open('answer',1.0)
		let db;
		req.onsuccess=function(e){
			db = e.target.result;
			const store = db.transaction(['answers'],'readwrite').objectStore('answers')
			const req = store.getAll()
			req.onsuccess =function(){
				console.log(req.result);
			}
			req.onerror = function(){
			}
		}
		req.onerror=function(e){
			console.log(e);
		}
	}
}
export default fn