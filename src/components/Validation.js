const Validation=(email,password)=>
{
    const emailres=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passres=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailres)
    {
        return "Invalid Email address"
    }
    if(!passres)
    {
        return "Invalid password"
    }
    return true
}
export default Validation