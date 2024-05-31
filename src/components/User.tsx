import { useState } from "react";
type cmpType="Accenture"|"Tcs";
type usertype={
    name:string,
    age:number,
    cmp:"Accenture"|"Tcs";

}

const User=()=>{
    const [name,setName]=useState<string>("");
    const [age,setAge]=useState<number>(0);
    const [cmp,setCmp]=useState<cmpType>('Accenture');

   

    const userArr:usertype[]=[{
        name:'rohan',
        age:20,
        cmp:'Accenture'
    }];
    const [userArrData,setUserArrData]=useState<usertype[]>(userArr);
    const userArry=userArrData.map((e)=>{
       return(
       <div  className="m-4 border-2 p-20" >
       <p>name: {e.name}</p>
        <p>age: {e.age}</p>
       <p>cmp : {e.cmp}</p>
       
    
       </div>
       )
    })
    function userData(){
        
        console.log(name,age,cmp);
       // userArr.push({name,age,cmp});

        setUserArrData([...userArrData,{name,age,cmp}]);
       
    }


    return(
        <div className= "border-2 bg-red-600 ">
            <input className="border-2 m-2" type="text" name="name" value={name} onChange={(e)=>{
                setName(e.target.value);
            }} /><br/>

            <input className="border-2 m-2"  type="text"  name="age" value={age} onChange={(e)=>{
                setAge(parseInt(e.target.value));
            
            }}/><br/>

            <input className="border-2 m-2 border-separate"   type="text " name="cmp" value={cmp} onChange={(e)=>{
                console.log(e.target.value);
                const Data:any=e.target.value;
                 setCmp(Data)
            }}/> <br/>
            <button className="h-10 w-24 bg-green-600 m-3 " onClick={userData}>Clik me</button> <br/>
            {userArry}
            


        </div>

    )

}
export default User;