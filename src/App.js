import './app.css';
import {useState} from 'react';
function App() {
const [user, setUser] = useState({
name: '',
phone: '',
email: '',
password: ''
}) ;

const handleData = (e)=>{
  let name = e.target.name;
  let value = e.target.value;
   setUser({
    ...user,
    [name]:value
   })
}
  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      {/* <form>
        <p>
          Name: <br />
       <input name='name' onChange={(e)=> setUser({
        ...user,
        name: e.target.value
      }
       )}/>
       </p>
       <p>
          Phone: <br />
       <input type='tel' name='phone'
     onChange={(e)=> setUser({
      ...user,
  phone: e.target.value
}
 )}
       
       />
       </p>
       <p>
          Email: <br />
       <input type="email" name='email'
       
       onChange={(e)=> setUser({
        ...user,
    email: e.target.value
  }
   )}
       
       />
       </p>
       <p>
          password: <br
          
          />
       <input type="password" name='password'
        onChange={(e)=> setUser({
          ...user,
      password: e.target.value
    }
     )}
       
       />
       </p>
      </form> */}

<form>
        <p>
          Name: <br />
       <input name='name' onChange={handleData} />
       </p>
       <p>
          Phone: <br />
       <input type='tel' name='phone' onChange={handleData} />
       </p>
       <p>
          Email: <br />
       <input type="email" name='email' onChange={handleData} />
       </p>
       <p>
          password: <br
          
          />
       <input type="password" name='password' onChange={handleData} /> 
       </p>
      </form>
    </div>
  );
}

export default App;
