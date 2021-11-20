import {useState} from 'react'
import './App.css';
import List from './List';
import Alert from './Alert';

function App() {
  const [alert,setAlert] = useState({show:false,msg:'Hello',type:'danger'});
  const [list,setList] = useState([]);
  const [name,setName] = useState('');
  const [isEdit,setIsEdit] = useState(false);
  const [editID,setEditID] = useState(null) 
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!name){
      showAlert(true,'danger', 'Add an item please')
    }
    else if(name && isEdit){
          setList(
            list.map(item => {
              if(item.id === editID){
                return {...item,title:name}
              }
              return item
            })
          )
          setName('');
          setEditID(null);
          setIsEdit(false);
          showAlert(true,'success','item successfully changed')
    }
    else{
      
      const newItem = {id:Date.now(),title:name}
      setList([...list, newItem])
      setName('')
      showAlert(true,'success','Item has been successfully added!')
    }
    
  }
  const showAlert = (show=false,type='',msg='') =>{
    setAlert({show,type,msg})
  }

  const clearItems = () =>{
  setList([]);
  showAlert(true,'danger','Empty List!')
  }

  const deleteItem = (id) => {
    console.log(id)

    list.length > 1 && showAlert(true,'danger','Item Removed')
    list.length === 1 && showAlert(true,'danger','Empty List')
    const filteredTour = list.filter((item) => item.id !== id)
    setList(filteredTour)
  }

  const editItem = (id) =>{
    const particularItem = list.find(item => item.id === id)
    setIsEdit(true)
    setEditID(id)
    setName(particularItem.title)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} >
        {alert.show && <Alert {...alert} showAlert={showAlert}/>}
      <h2>Grocery List</h2>
        <input type='text' placeholder='e.g eggs' autoFocus={true} value={name} onChange={e =>  {setName(e.target.value)}} ></input>
        <button type='submit'>{isEdit? 'Edit' : 'Submit'}</button>
      </form>
      <div className='grocery-container'>
         <List className='list' items = {list} deleteItem={deleteItem} editItem={editItem}  />
      </div>
      {list.length > 0 &&
      <p className='clear' onClick={clearItems}>Clear items</p>
      }
    </div>
  );
}

export default App;
