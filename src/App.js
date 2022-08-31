import { View } from "./componenets/View";
import { CardContent, Card, TextField, Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import "./App.css"


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('data');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || data state || data array of objects
  const [data, setData]=useState(getDatafromLS());

  // input field states
  
  const [name, setName] = useState("");
  const [date, setDate] = useState(+"");
  const [ram, setRam] = useState("");
  const [hard, setHard] = useState("");
  const [keyboard, setKeyboard] = useState("");
  const [processor, setProcessor] = useState("");

  // form submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    let detail = { name, date, ram,hard ,keyboard ,processor };
    
    console.log(detail);
    // data.push(detail)
    setData([...data, detail]);
    console.log("data:", data);
  }

  // delete data from LS
  const deleteData=(isbn)=>{
    const filteredData=data.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setData(filteredData);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data));
  },[data])

  return (
    <div className='wrapper'>
      <h1>Computer Details</h1>
      <div className='main'>
        
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
              <Card className="width">
                <h2 className="center"> Configuration</h2>
                <CardContent className="flex">
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        label="Computer Name"
                        placeholder="Computer Name"
                        variant="outlined"
                      />
                    </Grid>

                    <Grid xs={12} item>
                      Purchase Date
                      <TextField
                        value= {date}
                        onChange={(e) => setDate(e.target.value)}
                        className="wi"
                        type="date"
                        name="date"
                        placeholder="Computer Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                        type="text"
                        name="ram"
                        label="Computer Ram"
                        placeholder="Enter RAM"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        value={hard}
                        onChange={(e) => setHard(e.target.value)}
                        type="text"
                        name="hardisk"
                        label="Computer Hardisk"
                        placeholder="Enter Hradisk"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        // onChange={handleClick}
                        onChange={(e) => setKeyboard(e.target.value)}
                        value={keyboard}
                        type="text"
                        name="keyboard"
                        label="Computer keyboard"
                        placeholder="Enter Keyboard"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                      value={processor}
                      onChange={(e) => setProcessor(e.target.value)}
                        // onChange={handleClick}
                        type="text"
                        name="processor"
                        label="Computer Processor"
                        placeholder="Enter Processor"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Button variant="contained" type="submit" color="primary">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </form>
        </div>

        <div className='view-container'>
          {data.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Computer Name</th>
                    <th>Purchase Date</th>
                    <th>Expiry Date</th>
                    <th>RAM</th>
                    <th>Hardisk</th>
                    <th>Keyboard</th>
                    <th>Processor</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View data={data} deleteData={deleteData}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setData([])}>Remove All</button>
          </>}
          {data.length < 1 && <div>No data are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
