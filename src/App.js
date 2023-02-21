import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState();
  const [item, setItems] = useState([]);
  const [edit, setEdit] = useState();
  const [toggle, setToggle] = useState(true);

  const additems = (id) => {
    if (!data) {
      alert("please fill the data");
    } else if (data && !toggle) {
      item.map((elem) => {
        if (elem.id === edit) {
          return { ...item, name: data }
        }
        return item;
      })
      setToggle(true);

      setItems('');

      setEdit(false)
    }
    else {
      const newdata = [id = newdata().setTime().toString(), [name] = data]
      return [...newdata, setItems]
      setItems('')
    }
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
    console.log(edit);

    setToggle(false);

    setData(edit.name);

    setEdit(id);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    setItems('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='add your todo'
          name='data'
          value={data.name}
          onChange={additems} />
        {toggle ? <button type='submit'>Update</button> : <button type='submit'>Add</button>}
      </form>
      <div>
        {item.map((elem) => {
          return (
            <>
              <div>{data.name}</div>
              <div key={elem.id}>
                <button onClick={() => onEdit(elem.id)}>EDIT</button>
                <button onClick={() => onDel(elem.id)}>DELETE</button>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
