import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router";

function SignUp() {

    const {i18n,t}=useTranslation()
  

    const {handleSubmit, register,getValues,formState:{errors}} =useForm();

    const onSubmit =(data)=>{
        console.log(data)
        navigate('/login')
    }

    const navigate = useNavigate();
     const handleNavigate=()=>{
    navigate('/login')
  }

  return (
    <>
    <div className="flex items-center justify-center p-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10">
        <legend className="fieldset-legend">{t('register')}</legend>

        <label className="label">{t('username')}</label>
        <input type="text" name="username"
         className="input" placeholder="Username"
         {...register('username',{
            required:true
         })}
         />
       {(errors.username?.type == 'required')?<p className="text-red-500">Username is Required</p>:'' }


        <label className="label">{t('email')}</label>
        <input type="email" name="email"
         className="input" placeholder="Email"
         {...register('email',{
            required:true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
         })}
         />
         {(errors.email?.type == 'required')?<p className="text-red-500">Email is Required</p>:(errors.email?.type == 'pattern')?<p className="text-red-500">Email must contain @</p>:'' }

        <label className="label">{t('password')}</label>
        <input type="password" name="password" 
         className="input" placeholder="Password"
         {...register('password',{
            required:true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
         })}
         />
         {(errors.password?.type=='required')?<p className="text-red-500">Password is Required</p>:(errors.password?.type=='pattern')?<p className="text-red-500">Password must contains numbers ,capital ch. ,sympols</p>:""}
       

        <label className="label">{t('confirm password')}</label>
        <input type="password" name="confirmpassword"
         className="input" placeholder="Confirm Password"
         {...register('confirmpassword',{
            required:true,
            validate: (value) => 
            value === getValues("password") || "Passwords do not match"
         })}
         />

        {/* {(errors.confirmpassword?.type=='required')?<p className="text-red-500">Password is Required</p>:""} */}
         {errors.confirmpassword && <p className="text-red-500">{errors.confirmpassword.message}</p>}


        <button className="btn btn-neutral mt-4 hover:bg-red-900"
        onClick={handleSubmit(onSubmit)}
        >Sign up</button>
        <div className="flex flex-row items-center justify-center gap-1">
            <p className="">{t('already have account')}</p>
            <p className="hover:underline cursor-pointer font-bold"
            onClick={handleNavigate}
            >Login</p>
        </div>
      </fieldset>
      </div>
    </>
  );
}
export default SignUp;
