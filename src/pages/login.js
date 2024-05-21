import React from "react";
const Login=()=>{
    return(
        <>
                        <form action="" method=" ">

                <label typeof="text">email</label>
                <input type="email" required placeholder="enter email" name="email" ></input>
                <lable type="text">password</lable>
                <input type="password" required placeholder="enter password " name="password"></input>
                <button >Submit</button>
            </form>
        </>
    )
}
export default Login