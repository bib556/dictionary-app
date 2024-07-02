
// import './App.css';
// import axios from "axios"
// import { useState } from "react"

// function App() {


//  const [data,setData]= useState("")
//  const [searchWord, setSearchWord] = useState("")

//  function getMeaning() {
//   axios.get(
//     `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
//   ).then((response) => {
//     setData(response.data[0]);
//   });
// }


//   return (
//    <div className="container">
//     <h1>Dictionary App </h1>
//     <input type="text" id = "text" placeholder ="enter the word" onChange = {(e)=>{setSearchWord(e.target.value)}}/>
//     <button id = "search" onClick = {getMeaning}>search</button>
//     <div className="container1">
//     <h1> {data[0].word}</h1>
//    <p> {data[0].meanings[0].partOfSpeech}</p>
//   <p> {data[0].meanings[0].definitions[0].definition}</p>
//     </div>
//    </div>
//   );
// }

// export default App;
import { React, useState } from "react";
import Axios from "axios";
import "./App.css";


function App() {
// Setting up the initial states using react hook 'useState'

const [data, setData] = useState("");
const [searchWord, setSearchWord] = useState("");

// Function to fetch information on button 
// click, and set the data accordingly
function getMeaning() {
	Axios.get(
	`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
	).then((response) => {
	setData(response.data[0]);
	});
}

// Function to play and listen the 
// phonetics of the searched word
function playAudio() {
	let audio = new Audio(data.phonetics[0].audio);
	audio.play();
}

return (
	<div className="App">
	<h1>Free Dictionary</h1>
	<div className="searchBox">

		<input
		type="text"
		placeholder="Search..."
		onChange={(e) => {
			setSearchWord(e.target.value);
		}}
		/>
		<button
		onClick={() => {
			getMeaning();
		}}
		>
		submit
		</button>
	 </div>
	  {data && (<div className = "showResults"> <h2>
	 		{data.word}{" "}
			<button
			onClick={() => {
				playAudio();
			}}
			>
			speak
			</button>
		</h2>
		<h4>Parts of speech:</h4>

		
   <p>{data.meanings[0].partOfSpeech}</p>


		<h4>Definition:</h4>

		
   <p>{data.meanings[0].definitions[0].definition}</p>


		<h4>Example:</h4>

		
   <p>{data.meanings[0].definitions[0].example}</p>

		</div>
	 )}
	</div>
);
}

export default App;
