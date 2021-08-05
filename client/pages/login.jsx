import Styles from '../components/Styles'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import {loginUser} from '../actions'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Login () { 
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async (data) => {
        console.log(data);

        let result = await loginUser(data)
        if (result) {
            Swal.fire('Login Success', `Welcome back ${result.email}`, 'success')
            localStorage.setItem('access_token', 'loginSuccess')
            router.push('/')
        } else {
            Swal.fire('Oops!', 'Invalid email/password', 'success')
        }
    }

    return (
        <>
        <div className="d-flex justify-content-center">
        <main>
                <div className="" style={{width: '40%'}}>
                    <Link href="/" >Back</Link>
                    <h3 className="text-center pt-3">Login</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="email" {...register("email")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="password" {...register("password")} />
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