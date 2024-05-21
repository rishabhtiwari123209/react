import React from "react";
const Register=()=>{
    return(
        <>
            <form action="" method=" ">
                <label typeof="text">name</label>
                <input type="text" placeholder="enter name" name="username" ></input>
                <label typeof="text">email</label>
                <input type="email" required placeholder="enter email" name="email" ></input>
                <lable type="text">password</lable>
                <input type="password" required placeholder="enter password " name="password"></input>
                <button >Submit</button>
            </form>
        </>
    )
}
export default Register;