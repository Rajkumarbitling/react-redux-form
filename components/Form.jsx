"use client"
import { addUser, updateUser } from "@/lib/features/formSlice"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";
import { useEffect, useId } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';

const Form = ({ id, isView }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useDispatch()
    const router = useRouter();
    const uid = useId()
    const tableData = useSelector(state => state.form.value)

    let defaultValues = {
      fullName: "",
      address: "",
      country: "",
      pincode: "",
    };

    const onSubmit = (data) => {
      if(id){
        confirmAlert({
          title: 'Confirmation Required',
          message: 'Are you sure, want to do Update?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                dispatch(updateUser(data))
                router.push("/")
                toast.success("Updated Succesfully")
              }
            },
            {
              label: 'No',
            }
          ]
        });
      } else {
        confirmAlert({
          title: 'Confirmation Required',
          message: 'Are you sure, want to do Save?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                dispatch(addUser(data))
                router.push("/")
                toast.success("Saved Succesfully")
              }
            },
            {
              label: 'No',
            }
          ]
        });
      }
    }

    const handleCancel = () => {
      router.back()
    }

    const getData = () => {
      let filtered = tableData.find(item => item.uid === id)
      defaultValues = filtered
      reset(filtered)
    }

    useEffect(() => {
      if(id !== undefined) getData()
    }, [id])
    

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <input type="text" name="uid" id="uid" disabled={isView} {...register("uid", { required: true, value: uid })} className="hidden" />
        <div className="col-span-full">
          <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
          <div className="mt-2">
            <input type="text" name="full-name" id="full-name" disabled={isView} {...register("fullName", { required: true })} aria-invalid={errors.fullName ? "true" : "false"} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            {errors.fullName?.type === "required" && (
              <p role="alert">Full name is required</p>
            )}
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
          <div className="mt-2">
            <input type="text" name="address" id="address" disabled={isView} {...register("address", { required: true })} aria-invalid={errors.address ? "true" : "false"} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            {errors.address?.type === "required" && (
              <p role="alert">Address is required</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              disabled={isView}
              {...register("country", { required: true })} 
              aria-invalid={errors.country ? "true" : "false"}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>India</option>
              <option>Russia</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            {errors.country?.type === "required" && (
              <p role="alert">Country is required</p>
            )}
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">Pincode</label>
          <div className="mt-2">
            <input type="text" name="pincode" id="pincode" disabled={isView} {...register("pincode", { required: true })} aria-invalid={errors.pincode ? "true" : "false"} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            {errors.pincode?.type === "required" && (
              <p role="alert">Pincode is required</p>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={handleCancel} className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{id ? 'Update' : 'Save'}</button>
    </div>
    </form>
  )
}

export default Form