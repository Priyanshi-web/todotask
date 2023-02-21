import React, { useState, useEffect } from 'react'

const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return [];
  }
}

const App = () => {

  const [data, setData] = useState('');
  const [item, setItems] = useState(getLocalItmes());
  const [edit, setEdit] = useState(null);
  const [toggle, setToggle] = useState(true);

  
  const addItem = () => {
    if (!data) {
      alert("please fill the data");
    } else if (data && !toggle) {
      setItems(
        item.map((elem) => {
          if (elem.id === edit) {
            return { ...elem, name: data }
          }
          return elem;
        })
      )
      setToggle(true);

      setData('');

      setEdit(null)
    }
    else {
      const newdata = { id: new Date().getTime().toString(), name: data }
      setItems([...item, newdata]);
      setData('')
    }

    setData({})
  }

  const onDel = (index) => {
    const updatedata = item.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updatedata);
  }

  const onEdit = (id) => {
    let EditData = item.find((elem) => {
      return elem.id === id
    });
    console.log(EditData);

    setToggle(false);

    setData(EditData.name);

    setEdit(id);

  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(item))
  }, [item]);


  return (
    <div>
      <div>
        <input
          type="text"
          placeholder='add your todo'
          value={data.tname}
          onChange={(e) => setData(e.target.value)}
        />
        {toggle ? <button onClick={addItem}>Add</button> : <button onClick={addItem}>Update</button> }
      </div>
      <div>
        {item.map((elem) => {
          return (
          
              <div key={elem.id}>
                <h5>{elem.name}</h5>
                <div>
                  <button onClick={() => onEdit(elem.id)}>EDIT</button>
                  <button onClick={() => onDel(elem.id)}>DELETE</button>
                </div>
              </div> 
          )
        })}
      </div>
    </div>
  )
}

export default App