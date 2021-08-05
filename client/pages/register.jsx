import Styles from '../components/Styles'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import {registerUser} from '../actions'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Register () { 
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async (data) => {
        console.log(data);

        let result = await registerUser(data)
        if (result) {
            Swal.fire('Register Success', ``, 'success')
            router.push('/login')
        } else {
            Swal.fire('Oops!', 'Email/password cannot be empty', 'success')
        }
    }

    return (
        <>
        <div className="d-flex justify-content-center">
        <main>
                <div className="" style={{width: '40%'}}>
                    <Link href="/" >Back</Link>

                    <h3 className="text-center pt-3">Register</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="email" {...register("email", {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}) } />
                        {errors.email?.type === 'required' && "Email cannot be empty"}
                        {errors.email?.type === 'pattern' && "Input must be an email"}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="password" {...register("password", {required: true, minLength: 5, })} />
                        {errors.password?.type === 'required' && "Password cannot be empty"}
                        {errors.password?.type === 'minLength' && "Password minimum: 5 characters"}

                    </div>
                    
                    <button type="submit" className="btn btn-primary form-control">Login</button>


                    </form>
                </div>


        </main>
        </div>

        <Styles />
        </>
    )
}