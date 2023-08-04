import './style.css';

import { IoTrash, IoPencil } from "react-icons/io5";

const Table = ({data}) => {

  const editItem = (event) => {
    }

  const deleteItem = (event) => {
    }


  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price(₴)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem) => (
          <tr key={dataItem.id} id={dataItem.id}>
            <td>{dataItem.id}</td>
            <td>{dataItem.category}</td>
            <td>{dataItem.name}</td>
            <td>{dataItem.quantity}</td>
            <td>{dataItem.price}</td>
            <td>
              <span onClick={editItem}> <IoPencil /> </span>
              <span onClick={deleteItem}> <IoTrash /> </span>
            </td>

          </tr>

        ))}
      </tbody>
    </table>

  )
}

export default Table;