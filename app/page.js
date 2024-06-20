"use client"
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";
import { deleteUser } from "@/lib/features/formSlice";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Home() {
  const tableData = useSelector(state => state.form.value)
  const router = useRouter()
  const dispatch = useDispatch()
  
  const onEdit = (e) => {
    const {uid} = e.target.dataset
    router.push(`/form?uid=${uid}`)
  }

  const onDelete = (e) => {

    confirmAlert({
      title: 'Confirmation Required',
      message: 'Are you sure, want to do Delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const {uid} = e.target.dataset
            dispatch(deleteUser(uid))
          }
        },
        {
          label: 'No',
        }
      ]
    });
  }
  return (
    <>
    <div>
    <span className="text-2xl font-bold">Bank Customer</span>
      <Link href="/form" className=" float-right rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Manage Benficiery</Link>
    </div>
      <table class="table-auto border-separate border border-slate-500 table w-full my-8">
        <thead className="table-header-group">
          <tr className="table-row text-center">
            <th className="table-cell border border-slate-600">Full Name</th>
            <th className="table-cell border border-slate-600">Address</th>
            <th className="table-cell border border-slate-600">Country</th>
            <th className="table-cell border border-slate-600">Pincode</th>
            <th className="table-cell border border-slate-600" colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {tableData?.map((item, i) => (
            <tr key={i} className="table-row text-center">
              <td className="table-cell border border-slate-600">{item.fullName}</td>
              <td className="table-cell border border-slate-600">{item.address}</td>
              <td className="table-cell border border-slate-600">{item.country}</td>
              <td className="table-cell border border-slate-600">{item.pincode}</td>
              <td className="table-cell border border-slate-600"><button className="bg-indigo-600 text-white px-4 rounded-sm" onClick={onEdit} data-uid={item.uid}>Edit</button></td>
              <td className="table-cell border border-slate-600"><button className="bg-red-600 text-white px-4 rounded-sm" onClick={onDelete} data-uid={item.uid}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
