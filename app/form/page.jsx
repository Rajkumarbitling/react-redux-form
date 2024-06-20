"use client"
import Form from "../../components/Form"
import { useSearchParams } from 'next/navigation'

const FormPage = () => {
  const searchParams = useSearchParams()
  const uid = searchParams.get('uid')
  const isView = searchParams.get('view')
  return (
    <Form id={uid} isView={isView} />
  )
}

export default FormPage