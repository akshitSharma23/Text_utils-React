import React, {useState} from 'react'
let mes=0;


export default function MsgBox(props) {

  const [place,change]=useState("enter your text here :)");
  const [text,textFunc]=useState("");
  const[find,wordFind]=useState("");
  const[rep,replaceWord]=useState("");


  let handler=(event)=>{
    textFunc(event.target.value);
  }
  let binaryAgent= ()=>{
    if(isNaN(text)){
    textFunc(text.split(' ').map(letter=>String.fromCharCode(parseInt(letter, 2))).join(''));
    props.alert("Text change to binary code","success");}
    else{
      props.alert("Text change to binary is not correct","danger");
    }
}

  let binary=()=>{
    if(isNaN(text)){
    textFunc(
      Array
        .from(text)
        .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
        .map(bin => '0'.repeat(8 - bin.length) + bin )
        .join(' ')
    );
    props.alert("Text change to binary code","success");}
    else{
      props.alert("Text change to binary is not correct","danger");
    }
  }

  let NumberBinary=() =>{
    if(isNaN(text)){
      props.alert("Text change to binary is not correct","danger");}
    else{
      textFunc(Number(text).toString(2));
      props.alert("Text change to binary code","success");}
  };

  // let BinaryNumber=() =>{
  //   if(isNaN(text)){
  //     props.alert("Text change to binary is not correct","danger");}
  //   else{
  //     textFunc(parseInt(text, 2));
  //     props.alert("Text change to binary code","success");}
  // };

  // let BinaryNumber=() =>{
  //   let decimal = 0;
  //   let curr=text.toString();
  //   let l = curr.length;
  //   for (let i = l - 1; i >= 0; i--) {
  //      if ( [i] === '1' )
  //      decimal += Math.pow( 2, l - 1 - i );
  //   }
  //   curr=parseInt(decimal);
  //   textFunc(curr);
  //   }

  let upperCase=() =>{
    textFunc(text.toUpperCase());
    props.alert("Text change to UpperCase","success");
  };

  const newStr=() =>{
    textFunc(text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' '));
    props.alert("Text change to TitleCase","success");
  };

  const pascal=() =>{
    textFunc(text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(''));
    props.alert("Text change to TitleCase","success");
  };

  let lowerCase=() =>{
    textFunc(text.toLowerCase());
    props.alert("Text change to LowerCase","success");
  };

  let sen=() =>{
    textFunc(text[0].toUpperCase()+text.substring(1).toLowerCase());
    props.alert("Text change to SentenceCase","success");
  };

  let findWord=(event) =>{
    wordFind(event.target.value);  
  };

  let replace= (event)=>{
    replaceWord(event.target.value);
  }

  let clear=()=>{
    textFunc("");
    wordFind("");
    replaceWord("");
    props.alert("text is clear","success");
  }
  
  let copy=()=>{
    navigator.clipboard.writeText(text);
    props.alert("text is copied","success");
  }

  let space=()=>{
    let newText = text.split(/[ ]+/);
    textFunc(newText.join(" "));
    props.alert("extra spaces is removed","success");
  }    

  let findClicked= ()=>{
    let count=0;
    let arr=find.split(" ");
    wordFind(arr[0]);
    let a=text.split(" ");
    let s="";
    for(let i=0;i<a.length;i++){
      if(i>0)
      s+=" ";
      if(a[i]===find){
        s+=rep;
        count+=1;
      }
      else
        s+=a[i];
    }
    mes=(count===0)?-1:count;
    textFunc(s);
    props.alert("word is Replaced","success");
  }



  return (<>
    <div className={`mb-3 container mt-3 text-${(props.Mode==='dark')?"white":"dark"}`}>
    <textarea className="form-control mt-5" value={text} placeholder={place} onChange={handler} rows="3"></textarea>
    <button className="btn btn-primary mt-3 mx-2" onClick={upperCase}>Convert to UppperCase</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={lowerCase}>Convert to LowerCase</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={clear}>Clear</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={copy}>Copy Text</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={space}>RemoveExtraSpaces</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={newStr}>TitleCase</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={sen}>SentenceCase</button>
    <button className="btn btn-primary mt-3 mx-2" onClick={pascal}>PascalCase</button>
    <div className="A">
    <div className="x">
      <button className="btn btn-primary mt-3 mx-2" onClick={binary}>Text To Binary</button>
      <button className="btn btn-primary mt-3 mx-2" onClick={binaryAgent}>Binary To Text</button>
    </div>
    <div className="y">
      <button className="btn btn-primary mt-3 mx-2" onClick={NumberBinary}>Number To Binary</button>
      {/* <button className="btn btn-primary mt-3 mx-2" onClick={BinaryNumber}>Binary To Number</button> */}
    </div>
    </div>
    <br/>

    <div className="row mt-2">
      <div className="col">
      <input type="text" className="form-control" placeholder="enter a word" value={find} onChange={findWord}/>
      </div>
      <div className="col">
      <input type="text" className="form-control" placeholder="replace word" value={rep} onChange={replace} />
      </div>
      <div className="col">
      <button className="btn btn-primary" onClick={findClicked}>Replace</button>
    </div>
    </div>
    <h4>your {find} word appeared {mes} times in text</h4>
    </div>
    <div className={`container text-${(props.Mode==='dark')?"white":"dark"}`}>
    <h1>Your text summary</h1>
    <p>your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    {/* <p>your text has {Wlen} words and {Clen} character</p> */}
    <br/>
    <p>Average time required to read this text {Math.floor((text.split(" ").length-1)*0.008*60)} seconds </p>
    <br/>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>)
}
