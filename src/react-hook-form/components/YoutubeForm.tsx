import { FieldErrors, useFieldArray, useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState } from "react"

let renderCount = 0

type FormValues = {
  username: string
  email: string
  channel: string,
  social: {
    twitter: string
    facebook: string
  },
  phoneNumber: string[] 
  phNumber: {
    number: string
  }[],
  age: number,
  dob: Date
}

export const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: ""
      },
      phoneNumber: ["", ""],
      phNumber: [{ number: "" }],
      age: 0,
      dob: new Date()
    } 
  })

  const { register, handleSubmit, control, formState, watch, getValues, setValue } = form
  const { errors } = formState

  const { fields, append, remove } = useFieldArray({
    name: "phNumber",
    control
  })

  const handleSetValue = () => {
    // setValue("username", "superman")
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors", errors)
  }

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data)
  }

  // const watchUsername = watch("username")
  // const watchForm = watch()

  // using this to prevent re render on every keystroke
  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log("watching", value);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [watch]);

  renderCount++
  return (
    <>
      <h1>Youtube Form {renderCount}</h1>
      {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-control">

          <label htmlFor="username">Name</label>
          <input type="text" id="username" {...register("username", {
            disabled: true,
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

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter", {
            required: "Twitter is required",
            disabled: watch("channel") === "",
          })} />
          <p className="error">{errors.social?.twitter?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook", {
            required: "Facebook is required"
          })} />
          <p className="error">{errors.social?.facebook?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone number</label>
          <input type="text" id="primary-phone" {...register("phoneNumber.0", {
            required: "Primary Phone Number is required"
          })} />
          <p className="error">{errors.phoneNumber?.[0]?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary phone number</label>
          <input type="text" id="secondary-phone" {...register("phoneNumber.1", {
            required: "Secondary Phone Number is required"
          })} />
          <p className="error">{errors.phoneNumber?.[1]?.message}</p>
        </div>

        <div>
          <label>List of phone numbers</label>
          {
            fields.map((field, index) => (
              <div key={field.id} className="form-control">
                <input type="text" {...register(`phNumber.${index}.number` as const, {
                  required: "Phone number is required"
                })} />
                {
                  index > 0 && (
                    <button onClick={() => remove(index)}>Remove</button>
                  )
                }
                <p className="error">{errors.phNumber?.[index]?.number?.message}</p>
              </div>
            ))
          }

          <button type="button" onClick={() => append({ number: "" }) }>Add phone number</button>
        </div>

        <div className="form-control">
          <label htmlFor="age">age</label>
          <input type="number" id="age" {...register("age", {
            valueAsNumber: true,
            required: "Age is required"
          })} />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date"  id="dob" {...register("dob", {
            valueAsDate: true,
          })} />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <button type="submit" disabled={!formState.isDirty}>Submit</button>
        <button type="button" onClick={() => console.log(getValues(["social.facebook", "channel"]))}>Get Values</button>
        
        <button type="button" onClick={handleSetValue}>Set Value</button>

      </form>
      <DevTool control={control} />
    </>
  )
}