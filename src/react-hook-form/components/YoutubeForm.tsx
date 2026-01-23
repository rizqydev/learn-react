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
  const { register, handleSubmit, control, formState } = form
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data)
  }

  renderCount++
  return (
    <>
      <h1>Youtube Form {renderCount}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">

          <label htmlFor="username">Name</label>
          <input type="text" id="username" {...register("username", {
            required: {
              value: true,
              message: "Username is required"
            },
          })} />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">

          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return fieldValue !== "admin@example.com" || "Enter a different email address"
              },
              notBlacklisted: (fieldValue) => {
                return !fieldValue.endsWith("baddomain.com") || "This domain is not allowed"
              }
            }
          })} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">

          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
            required: "Channel is required"
          })} />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  )
}