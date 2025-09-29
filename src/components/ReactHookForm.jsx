import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        reset,
        formState: { errors }
    } = useForm();
    const getUsername = getValues('username')
    const watchPassword = watch('password')
    const watchConfirmPassword = watch('confirmpassword')
    // useEffect(() => {
    //     // setValue("username","Deepak")
    //     console.log(watchUser)
    // }, [watchUser])
    const onSubmit = (data) => {
        if (watchPassword === watchConfirmPassword) {

            console.log('data', data)
            console.log('getUsername', getUsername)
            reset({
                username:"",
                email:watchPassword,
                password:""
            })

        }
        else {
            console.log("Password dont match")
        }

    }
    return (
        <>
            <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                <h2>Signup Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ marginBottom: 16 }}>
                        <label>UserName</label>
                        <input
                            {...register("username", {
                                required: "Username is required", pattern: {
                                    value: /^[a-z]+$/,
                                    message: "Username must be of lowercase letters"
                                }
                            })}
                            style={{ width: "100%", padding: 8, marginTop: 4, border: '1px solid black' }}
                            type="text"
                        />
                        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required", pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid Email "
                                }
                            })}
                            style={{ width: "100%", padding: 8, marginTop: 4, border: '1px solid black' }}
                            type="text"
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Password must be of 10 characters",
                                }
                            })}
                            placeholder="Enter your password"
                            style={{ width: "100%", padding: 8, marginTop: 4, border: '1px solid black' }}
                        />
                        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            {...register("confirmpassword", {
                                required: "Confirm password is required",
                                validate: (value) =>value === watchPassword || "Passwords do not match",
                            })}
                        placeholder="Confirm your password"
                        style={{ width: "100%", padding: 8, marginTop: 4, border: '1px solid black' }}
                        />
                        {errors.confirmpassword && <p style={{ color: "red" }}>{errors.confirmpassword.message}</p>}
                    </div>

                    <button
                        type="submit"

                        style={{
                            width: "100%",
                            padding: 10,
                            background: "blue",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            marginBottom: 10,
                        }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ReactHookForm