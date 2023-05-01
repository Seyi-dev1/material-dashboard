import styles from  './signUp.module.scss'
import React from 'react'
import image from '../../assets/Analytics process_Monochromatic.png'
import google from '../../assets/icons8-google-18.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsFillEyeFill } from 'react-icons/bs'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { signUp, googleSignin } from '../../redux/user/userReducer'
import { useSelector } from 'react-redux'
import { selectCurrentUser, selectErrorMessage } from '../../redux/user/userSelectors'

const SignUp = () => {


      const user = useSelector(state=>selectCurrentUser(state))
     
      const errorMessage = useSelector(state=>selectErrorMessage(state))

    const [inputs, setInputs] = React.useState({
        email:'',
        password:'',
        firstName:'',
        lastName:''
    })

    const [showPassword, setShowPassword] = React.useState(false)


    const eyeClick = ()=>{
        setShowPassword((prev)=>{
            return !prev
        })
    }

    const dispatch = useDispatch()

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(signUp(inputs))
        setInputs({
            email:'',
            password:'',
            firstName:'',
            lastName:''
        })
    }

    const handleChange = (event)=>{
        const { name, value } = event.target
        setInputs((prev)=>{
            return{...prev, [name]:value}
        })
    }

   

    const navigate = useNavigate()

    // React.useEffect(
    //     ()=>{
    //         user && navigate('/dashboard/app')
    //     }
    // )

  return (
    <div className={styles.signUp}>
         <div className={styles.form}>
            <p className={styles.title}>Sign Up</p>
            <form onSubmit={handleSubmit} className={styles.formField}>
            <div className={styles.entry}>
                    <label htmlFor="firstName">First name</label>
                    <input id='firstName' name='firstName' type="text" value={inputs.firstName} onChange={handleChange}/>
                </div>
                <div className={styles.entry}>
                    <label htmlFor="lastName">Last name</label>
                    <input id='lastName' name='lastName' type="text" value={inputs.lastName} onChange={handleChange}/>
                </div>
                <div className={styles.entry}>
                    <label htmlFor="email">Email address</label>
                    <input required id='email' name='email' type="email" value={inputs.email} onChange={handleChange}/>
                </div>
                <div className={styles.entry}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.password}>
                    <input required id='password' name='password' type={showPassword?'text':'password'} value={inputs.password} onChange={handleChange}/>
                    <span onClick={eyeClick} className={styles.move}>{showPassword?<BsFillEyeSlashFill className={styles.icon}/>:<BsFillEyeFill className={styles.icon}/>}</span>
                    </div>
                </div>
                <button>Sign Up</button>
                <p>Already have an account? <NavLink style={{textDecoration:'none'}} to={'/signin'}>Sign In</NavLink></p>
                <div className={styles.or}>
                    <div className={styles.line}></div>
                    <div>or</div>
                    <div className={styles.line}></div>
                </div>
                { errorMessage === 'Firebase: Error (auth/network-request-failed).' && <p>Network request failed. Check internet connection</p> }
                { errorMessage === 'Firebase: Error (auth/email-already-in-use).' && <p>Email already in use</p> }
                <button type='button' className={styles.google} onClick={()=>dispatch(googleSignin())}>
                <span><img src={google} alt="" /></span>
                 Authorize with Google
                </button>
            </form>
        </div>
        <div className={styles.carousel}>
            <img src={image} alt="carousel" />
        </div>
    </div>
  )
}

export default SignUp