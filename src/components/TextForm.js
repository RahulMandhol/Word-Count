import React, {useState} from 'react';

export default function TextForm(props) {
    const controlUpClick = ()=>{     
      let newText = text.toUpperCase();
       setText(newText)
    };
    const controlLowClick = ()=>{     
      let newText = text.toLowerCase();
       setText(newText)
    };   
   
    const controlCapitalizeAfterFullstop = () => {     
    
      // To Capitalize the first letter of the entire text
      let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();    
      // to match full stops followed by lowercase letters
      const regex = /\.\s([a-z])/g;
    
      // Replace matches with uppercase letters
      newText = newText.replace(regex, (match, letter) => {
        return `${match.toUpperCase()}`;
      });    
      setText(newText);
    };
    const controlCleanSlate = ()=>{     
      let newText = '';
       setText(newText)
    };

    const controlOnChange = (event) =>{
        setText(event.target.value) ;
        // the value of user  = text , which belongs to set text , in OnChange the set text will be 
    };
  const [text, setText] = useState("Enter Text Here"); 
  //(should be inside the rfc , (array destructuring syntax) )
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>  
       <h3 >{props.headding}</h3>
       <div className="mb-3"> 
       <textarea className="form-control" value={text}  onChange={controlOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}  id="myform" rows="7"></textarea>    
       </div> 
       <button className="btn btn-primary mx-1 my-2" onClick={controlUpClick}>Convert to Uppercase</button> 
       <button className="btn btn-primary mx-1 my-2" onClick={controlLowClick}>Convert to LowerCase</button> 
       <button className="btn btn-primary mx-1 my-2" onClick={controlCapitalizeAfterFullstop}>Auto fix Capitalization </button>
       <button className="btn btn-primary mx-1 my-2" onClick={controlCleanSlate}>Clear Text</button> 
    </div> 
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h4>Text Summary </h4>
      <p>{text.split(" ").length} words and {text.length} characters. </p>
      <h5>Time Taken to Read</h5>
      <p>{0.008* text.split(" ").length} Minutes.  </p>
      <h5>Preview</h5>
      <p>{text}</p>
    </div>
    </>
  );
}
