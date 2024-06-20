"use client"
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";
import { deleteUser } from "@/lib/features/formSlice";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import Table from "@/components/Table";
import { toast } from "react-toastify";


export default function Home() {
  const tableData = useSelector(state => state.form.value)
  const router = useRouter()
  const dispatch = useDispatch()
  
  const onEdit = (e) => {
    const {uid} = e.target.dataset
    router.push(`/form?uid=${uid}`)
  }

  const onView = (e) => {
    const {uid} = e.target.dataset
    router.push(`/form?uid=${uid}&view=true`)
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
            toast.success("Deleted Succesfully")
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
      {tableData.length > 0 && <Table tableData={tableData} onDelete={onDelete} onEdit={onEdit} onView={onView} />}
    </>
  );
}
