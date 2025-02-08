import './App.css'
import {useForm} from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    work,
    formState: {errors},
  } = useForm();
  
  function onSubmit(data){
    console.log("your data is submitted successfully...", data)
  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className='form1'>
      <div>
        <label htmlFor="firstName">FirstName:</label>
        <input {...register("firstName", 
          {
            required: true,
            minLength: {value: 3, message:"min length atleast 3"},
            maxLength: {value: 6, message:"max length atmost 6"},
          }
        )}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label htmlFor="middkeName">MiddleName:</label>
        <input {...register("middleName", 
          {
            required: true,
            minLength: {value: 3, message:"min length atleast 3"},
            maxLength: {value: 6, message:"max length atmost 6"},
          })} />
          {errors.middleName && <p>{errors.middleName.message}</p>}
      </div>
      <br />

      <div>
        <label htmlFor="lastName">LastName:</label>
        <input {...register("lastName", 
          {
            required: true,
            minLength: {value: 3, message:"min length atleast 3"},
            maxLength: {value: 6, message:"max length atmost 6"},
          })}/>
          {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit"  />
    </form>
  )
}

export default App
