import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas'

function App() {

  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [sizeText1, setSizeText1] = useState(10);
  const [sizeText2, setSizeText2] = useState(10);
  const [img = "img1", setImg] = useState();
  const meme = document.querySelector('.meme')

  const onChangeText1 = function (e) {
    setText1(e.target.value)
  }

  const onChangeText2 = function (e) {
    setText2(e.target.value)
  }

  const onChangeSizeText1 = function (e) {
    setSizeText1(e.target.value)
    meme.children[0].style.fontSize =`${e.target.value * 4}px`
  }
  const onChangeSizeText2 = function (e) {
    setSizeText2(e.target.value)
    meme.children[1].style.fontSize =`${e.target.value * 4}px`
  }

  const onChangeImg = function (e) {
    setImg(e.target.value)
  }

  const onChangeExportar = function (e) {
    html2canvas(document.querySelector(".meme")).then(canvas => {
      var img = canvas.toDataURL("image.png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
      
    });
  }
  // console.log(sizeText1)

  return (
    <div className="App">
      <div className='container'>
        <h1>CREADOR DE MEMES</h1>

        <div className='div'>
          <select onChange={onChangeImg}>
            <option value="img1">History</option>
            <option value="img2">Tory Story</option>
            <option value="img3">Leonaldo</option>
            <option value="img4">Dog</option>
            <option value="img5">wow</option>
            <option value="img6">Putin</option>
            <option value="img7">Cristiano</option>
          </select>
          <span className="material-symbols-outlined">expand_more</span>
          <span className='span'>imagen de meme</span>
        </div>

        <div className='div_label'>
          <label>
            <input onChange={onChangeText1} type='text' required/>
            <span>texto superior</span>
          </label>

          <label>
            <input onChange={onChangeSizeText1} type='number' value={sizeText1} required/>
          </label>
        </div>

        <div className='div_label'>
          <label>
            <input onChange={onChangeText2} type='text' required/>
            <span>texto inferior</span>
          </label>

          <label>
            <input onChange={onChangeSizeText2} type='number' value={sizeText2} required/>
          </label>
        </div>

          <figure className='meme'>
            <span>{text1}</span>
            <span>{text2}</span>
            <img src={'/img/' + img + '.png'} />
          </figure>
        <button onClick={onChangeExportar}>Exportar</button>
      </div>
    </div>
  );
}

export default App;
