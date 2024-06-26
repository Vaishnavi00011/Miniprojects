import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import axios from 'axios';

function ImageUpload() {
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState("")

    const firebaseConfig = {
        apiKey: "AIzaSyD05fJzRDiO1V3ti922k9lWbabs3WbxFLo",
        authDomain: "learning-6635b.firebaseapp.com",
        projectId: "learning-6635b",
        storageBucket: "learning-6635b.appspot.com",
        messagingSenderId: "266015293107",
        appId: "1:266015293107:web:6fcdea660dc026df89bac6",
        measurementId: "G-JBSJ4HFHMQ"
      };
      
    const app = firebase.initializeApp(firebaseConfig);

    const storage = app.storage();
    
    const handleUpload = async () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress function
          },
          (error) => {
            console.error(error);
          },
          () => {
            // Complete function
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                console.log(url); // This is the download URL of the uploaded image
                setImageUrl(url); // Set the download URL to imageUrl state
                const postData = ()=>{
                    const obj = {
                        image: url
                    }
                    axios.post("http://localhost:5001/api/image", obj).then(
                        ()=>alert("Posted Successfully")
                    ).catch((err)=>alert(err))
            
                  }
                postData()
              });
          },
          

        );
      };

      
    
  return (
    <div>
        <input onChange={(e)=>setImage(e.target.files[0])} type='file'></input>
        <button onClick={()=>{handleUpload()}}>Submit</button>
        <br></br>
        
        <img src={image}></img>
    </div>
  )
}

export default ImageUpload