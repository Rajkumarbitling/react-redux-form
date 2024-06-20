"use client"
import Form from "../../components/Form"
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const FormView = () => {
  const searchParams = useSearchParams()
  const uid = searchParams.get('uid')
  const isView = searchParams.get('view')
  return (
    <Form id={uid} isView={isView} />
  )
}

export function FormPage() {
  return (
    <Suspense>
      <FormView />
    </Suspense>
  )
}

export default FormPage