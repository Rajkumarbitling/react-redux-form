const Table = ({ tableData, onDelete, onEdit, onView }) => {
  return (
    <table class="table-auto border-separate border border-slate-500 table w-full my-8">
        <thead className="table-header-group">
          <tr className="table-row text-center">
            {Object?.keys(tableData?.[0]).slice(1).map((item, i) => <th key={i} className="table-cell border border-slate-600">{item.toUpperCase()}</th>)}
            <th className="table-cell border border-slate-600" colSpan={3}>ACTIONS</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {tableData?.map((item, i) => (
            <tr key={i} className="table-row text-center">
              {Object.values(item).slice(1).map((item, i) => <td key={i} className="table-cell border border-slate-600">{item}</td>)}
              <td className="table-cell border border-slate-600"><button className="bg-indigo-600 text-white px-4 rounded-sm" onClick={onView} data-uid={item.uid}>View</button></td>
              <td className="table-cell border border-slate-600"><button className="bg-indigo-600 text-white px-4 rounded-sm" onClick={onEdit} data-uid={item.uid}>Edit</button></td>
              <td className="table-cell border border-slate-600"><button className="bg-red-600 text-white px-4 rounded-sm" onClick={onDelete} data-uid={item.uid}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Table