import styles from './signIn.module.scss'
import React from 'react'
import image from '../../assets/Analytics process_Monochromatic.png'
import google from '../../assets/icons8-google-18.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsFillEyeFill } from 'react-icons/bs'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { signIn, googleSignin } from '../../redux/user/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, selectErrorMessage, selectIsLoading } from '../../redux/user/userSelectors'
import LoaderButton from '../../components/loader button/loaderButton'

const SignIn = () => {

    const dispatch = useDispatch()

    const user = useSelector(state=>selectCurrentUser(state))
     
    const errorMessage = useSelector(state=>selectErrorMessage(state))

    const isLoading = useSelector(state=>selectIsLoading(state))

    const [showPassword, setShowPassword] = React.useState(false)


    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(signIn(inputs))
        setInputs({
            email:'',
            password:'',
        })
    }


    const eyeClick = ()=>{
        setShowPassword((prev)=>{
            return !prev
        })
    }

    const [inputs, setInputs] = React.useState({
        email:'',
        password:''
    })

    const handleChange = (event)=>{
        const { name, value } = event.target
        setInputs((prev)=>{
            return{...prev, [name]:value}
        })
    }

    const navigate = useNavigate()

    React.useEffect(
        ()=>{
            user && navigate('/dashboard/app')
        }
    )


  return (
    <div className={styles.signIn}>
        <div className={styles.form}>
            <p className={styles.title}>Login</p>
            <form onSubmit={handleSubmit} className={styles.formField}>
                <div className={styles.entry}>
                    <label htmlFor="email">Email address</label>
                    <input id='email' name='email' type="email" value={inputs.email} onChange={handleChange}/>
                </div>
                <div className={styles.entry}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.password}>
                    <input id='password' name='password' type={showPassword?'text':'password'} value={inputs.password} onChange={handleChange}/>
                    <span onClick={eyeClick} className={styles.move}>{showPassword?<BsFillEyeSlashFill className={styles.icon}/>:<BsFillEyeFill className={styles.icon}/>}</span>
                    </div>
                </div>
                {isLoading?<LoaderButton/>: <button>Login</button>}
                <p>Don't have an account? <NavLink style={{textDecoration:'none'}} to={'/signup'}>Sign Up</NavLink></p>
                { errorMessage === 'Firebase: Error (auth/network-request-failed).' && <p>Network request failed. Check internet connection</p> }
                { errorMessage === 'Firebase: Error (auth/wrong-password).' && <p>Wrong password!</p> }
                { errorMessage === 'Firebase: Error (auth/user-not-found).' && <p>User not found!</p> }
                <div className={styles.or}>
                    <div className={styles.line}></div>
                    <div>or</div>
                    <div className={styles.line}></div>
                </div>
                <button onClick={()=>dispatch(googleSignin())} className={styles.google}><span><img src={google} alt="" /></span> Authorize with Google</button>
            </form>
        </div>
        <div className={styles.carousel}>
            <img src={image} alt="carousel" />
        </div>
    </div>
  )
}

export default SignIn