import { useState } from "react";

const Float = () => {

    const[form, setForm] = useState(false)
    const onForm = () =>{
        setForm(!form)
    }

    return ( 
        <div className="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" className="fab-checkbox" onClick={onForm}/>
        <label className="fab" htmlFor="fabCheckbox">
          <span className="fab-dots fab-dots-1" />
          <span className="fab-dots fab-dots-2" />
          <span className="fab-dots fab-dots-3" />
        </label>
        <form action="" className={form?"float-form":"float-form-hide"}>
            <textarea className="rounded textarea" name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" className="float-submit"/>
        </form>
        </div>
     );
}
 
export default Float;