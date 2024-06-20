"use client"
import Form from "../../components/Form"
import { useSearchParams } from 'next/navigation'

const FormPage = () => {
  const searchParams = useSearchParams()
  const uid = searchParams.get('uid')
  return (
    <Form id={uid} />
  )
}

export default FormPage