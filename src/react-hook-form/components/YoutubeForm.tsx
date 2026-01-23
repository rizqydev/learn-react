import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState } from "react"

let renderCount = 0

type FormValues = {
  username: string
  email: string
  channel: string
}

export const YoutubeForm = () => {
  const form = useForm<FormValues>()
  const { register, handleSubmit, control } = form

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data)
  }

  renderCount++
  return (
    <>
      <h1>Youtube Form {renderCount}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" {...register("username", {
          required: {
            value: true,
            message: "Username is required"
          },
        })} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email format",
          },
        })} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  )
}