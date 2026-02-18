import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router";

function Login() {

  const {i18n,t}=useTranslation()

  const navigate =useNavigate();
  const handleNavigate=()=>{
    navigate('/register')
  }

  const [user,setUser]=useState({
    email:'',
    password:''
  });
  const[errors,setErrors] =useState({
    emailError:'',
    passwordError:''
  });

  const handleChange=(evt)=>{
    // console.log(evt.target);

    if(evt.target.name === 'email'){
      
      setUser({
        ...user,email:evt.target.value
      })
      setErrors({...errors,emailError:(evt.target.value==0?'Email is empty':(!evt.target.value.includes('@'))?'Email must include @':'')})
    }else if(evt.target.name ==='password'){
       setUser({
        ...user,password:evt.target.value
      })
      setErrors({...errors,passwordError:(evt.target.value==0?'Password is empty':(evt.target.value.length<6?'password must be at least 6 charactars':''))})

    }
  }

  const handleSubmit=(evt)=>{
    console.log(user);
    navigate('/')
  
  }

    return <>

    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920')",
      }}
    >
    {/* <div className="absolute inset-0 bg-black/40"></div> */}
   
  <div className=" flex items-center justify-center  p-10 ">
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
      <legend className="fieldset-legend">{t('login')}</legend>

      <label className="label">{t('email')}</label>
      <input type="email"
       value={user.email}
       name="email"
       onChange={(e)=>{handleChange(e)}}
        className="input" placeholder="Email" />
        {errors.emailError && <p className="text-red-500">{errors.emailError}</p>}

      <label className="label">{t('password')}</label>
      <input type="password"
      
       value={user.password}
       name="password"
       onChange={(e)=>{handleChange(e)}}
        className="input" placeholder="Password" />
        {errors.passwordError && <p className="text-red-500">{errors.passwordError}</p>}

      <p className="cursor-pointer hover:underline">{t('forget password')} </p>

      <button className="btn btn-neutral mt-4 hover:bg-red-900"
       onClick={(e)=>{handleSubmit(e);}}
      disabled={(errors.emailError || errors.passwordError || user.email==''||user.password=='')}
       >{t('login')} 
       </button>
        <div className="flex flex-row items-center justify-center gap-1">
            <p>{t("don't have acount")}</p>
            <button className="hover:underline cursor-pointer font-bold"
            onClick={handleNavigate}
            >Register Now
            </button>
        </div>
    </fieldset>
    
    </div>
  </div>
    </>
}
export default Login;
