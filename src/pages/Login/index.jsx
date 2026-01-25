function Login() {
    return <>
   
  <div className=" flex items-center justify-center  p-10">
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-12">
      <legend className="fieldset-legend">Login</legend>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />
      <p className="cursor-pointer hover:underline">Forget password? </p>

      <button className="btn btn-neutral mt-4 hover:bg-red-900">Login</button>
    </fieldset>
    
    </div>
  
    </>
}
export default Login;
