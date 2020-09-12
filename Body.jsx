import React from 'react';
import './css/Body.css';

//Pack w9x
import Win9x from './img/win95-98/windows.png';
import alert9x from './img/win95-98/alerta.png';
import error9x from './img/win95-98/error.png';
import ex9x from './img/win95-98/exclamacion.png';
import pre9x from './img/win95-98/pregunta.png';
import button9x from './img/win95-98/boton.png';

//Pack w31
import Win31 from './img/win3_1/windows.png';
import alert31 from './img/win3_1/alerta.png';
import error31 from './img/win3_1/error.png';
import pre31 from './img/win3_1/pregunta.png';
import button31 from './img/win3_1/boton.png';

//Pack W8
import Win881 from './img/Win8-8_1/windows.png';
import alert881 from './img/Win8-8_1/alerta.png';
import error881 from './img/Win8-8_1/error.png';
import ex881 from './img/Win8-8_1/exclamacion.png';
import pre881 from './img/Win8-8_1/pregunta.png';
import button881 from './img/Win8-8_1/boton.png';

//Pack ME-200
import winME2000 from './img/winME-2000/windows.png';
import alert2000 from './img/winME-2000/alerta.png';
import error2000 from './img/winME-2000/error.png';
import ex2000 from './img/winME-2000/exclamacion.png';
import pre2000 from './img/winME-2000/pregunta.png';
import button2000 from './img/winME-2000/boton.png';

//Pack w7
import WinV7 from './img/WinVista-7/windows.png';
import alertV7 from './img/WinVista-7/alerta.png';
import errorV7 from './img/WinVista-7/error.png';
import exV7 from './img/WinVista-7/exclamacion.png';
import preV7 from './img/WinVista-7/pregunta.png';
import buttonV7 from './img/WinVista-7/boton.png';

//Pack wXP
import WinXP from './img/WinXP/windows.png';
import alertXP from './img/WinXP/alerta.png';
import errorXP from './img/WinXP/error.png';
import exXP from './img/WinXP/exclamacion.png';
import preXP from './img/WinXP/pregunta.png';
import buttonXP from './img/WinXP/boton.png';

//Pack w10
import Win10 from './img/win10/windows.png';
import alert10 from './img/win10/alerta.png';
import error10 from './img/win10/error.png';
import ex10 from './img/win10/exclamacion.png';
import pre10 from './img/win10/pregunta.png';
import button10 from './img/win10/boton.png';


//Load for generate
import time from './img/time.gif';


class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      catType: 'none'
    }

    this.state = {
      dogType: 'Windows3.1'
    }

    this.state = {
      birdType: 'none'
    }

    this.state = {
      title: ''
    }

    this.state = {
      text: ''
    }

    this.state = {
      b1: ''
    }

    this.state = {
      b2: ''
    }

    this.state = {
      b3: ''
    }

    this.state = {
      b4: ''
    }
  }

  handleSubmitTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSubmitText(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmitB1(event) {
    this.setState({
      b1: event.target.value
    });
  }

  handleSubmitB2(event) {
    this.setState({
      b2: event.target.value
    });
  }

  handleSubmitB3(event) {
    this.setState({
      b3: event.target.value
    });
  }

  handleSubmitB4(event) {
    this.setState({
      b4: event.target.value
    });
  }

  changeModel() {
    var ele = document.getElementById('button').value;
    this.setState({ catType: ele });
  }

  windowsModel() {
    var alo = document.getElementById('type').value;
    this.setState({ dogType: alo });
  }

  changelErrorVersion() {

  }

  statusChange() {
    var ilu = document.getElementById('status').value;
    this.setState({ birdType: ilu });
  }

  statusW31() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={error31} alt="error31" />
    ];
    var alerts = [
      <img class="bottom" src={alert31} alt="alert31" />
    ];
    var ans = [
      <img class="bottom" src={pre31} alt="pre31" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  statusW9x() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={error9x} alt="error9x" />
    ];
    var excla = [
      <img class="bottom" src={ex9x} alt="ex9x" />
    ];
    var alerts = [
      <img class="bottom" src={alert9x} alt="alert9x" />
    ];
    var ans = [
      <img class="bottom" src={pre9x} alt="pre9x" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'exclamation':

        return excla;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:

        return none;
    }
  }

  statusW2000ME() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={error2000} alt="error9x" />
    ];
    var excla = [
      <img class="bottom" src={ex2000} alt="ex9x" />
    ];
    var alerts = [
      <img class="bottom" src={alert2000} alt="alert9x" />
    ];
    var ans = [
      <img class="bottom" src={pre2000} alt="pre9x" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'exclamation':

        return excla;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  statusWXP() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={errorXP} alt="error9x" />
    ];
    var excla = [
      <img class="bottom" src={exXP} alt="ex9x" />
    ];
    var alerts = [
      <img class="bottom" src={alertXP} alt="alert9x" />
    ];
    var ans = [
      <img class="bottom" src={preXP} alt="pre9x" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'exclamation':

        return excla;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  statusWVISTA7() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={errorV7} alt="error9x" />
    ];
    var excla = [
      <img class="bottom" src={exV7} alt="ex9x" />
    ];
    var alerts = [
      <img class="bottom" src={alertV7} alt="alert9x" />
    ];
    var ans = [
      <img class="bottom" src={preV7} alt="pre9x" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'exclamation':

        return excla;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:
        return none;

    }
  }

  statusW881() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={error881} alt="error9x" />
    ];
    var excla = [
      <img class="bottom" src={ex881} alt="ex9x" />
    ];
    var alerts = [
      <img class="bottom" src={alert881} alt="alert9x" />
    ];
    var ans = [
      <img class="bottom" src={pre881} alt="pre9x" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'exclamation':

        return excla;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:
        return none;

    }
  }

  statusW10() {
    var none = [
      <div></div>
    ];
    var error = [
      <img class="bottom" src={error10} alt="error9x" />
    ];
    var excla = [
      <img class="bottom" src={ex10} alt="ex9x" />
    ];
    var alerts = [
      <img class="bottom" src={alert10} alt="alert9x" />
    ];
    var ans = [
      <img class="bottom" src={pre10} alt="pre9x" />
    ];

    switch (this.state.birdType) {
      case 'critical':

        return error;

      case 'exclamation':

        return excla;

      case 'alert':

        return alerts;
      case 'answer':

        return ans;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  typeVersion() {
    var w31 = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
      </select>
    ];

    var w881 = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
        <option value="exclamation">exclamation</option>
      </select>
    ];

    var w9x = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
        <option value="exclamation">exclamation</option>
      </select>
    ];

    var w10 = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
        <option value="exclamation">exclamation</option>
      </select>
    ];

    var w2000ME = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
        <option value="exclamation">exclamation</option>
      </select>
    ];

    var wXP = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
        <option value="exclamation">exclamation</option>
      </select>
    ];

    var w7 = [
      <select name="status" id="status" class="form-control" onChange={this.statusChange.bind(this)}>
        <option value="none">None</option>
        <option value="critical">critical</option>
        <option value="alert">alert</option>
        <option value="answer">answer</option>
        <option value="exclamation">exclamation</option>
      </select>
    ];

    switch (this.state.dogType) {

      case 'Windows3.1':

        return w31;

      case 'Windows95/98':

        return w9x;

      case 'WindowsME/2000':

        return w2000ME;

      case 'WindowsXP':

        return wXP;

      case 'WindowsVista/7':

        return w7;

      case 'Windows8/8.1':

        return w881;

      case 'Windows10':

        return w10;

      default:

        return w31;

    }
  }

  windowsSwitch() {

    //Windows Message
    var win31 = [
      <div>
        <img src={Win31} width="100%" alt="Window" />
        <div class="pruebaT31">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaM31">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    var win881 = [
      <div>
        <img src={Win881} width="100%" alt="Window" />
        <div class="pruebaT881">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaM881">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    var win9x = [
      <div>
        <img src={Win9x} width="100%" alt="Window" />
        <div class="pruebaT9x">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaM9x">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    var win10 = [
      <div>
        <img src={Win10} width="100%" alt="Window" />
        <div class="pruebaT">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaM">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    var win2000ME = [
      <div>
        <img src={winME2000} width="100%" alt="Window" />
        <div class="pruebaT2000">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaM2000">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    var winXP = [
      <div>
        <img src={WinXP} width="100%" alt="Window" />
        <div class="pruebaTxp">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaMxp">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    var winV7 = [
      <div>
        <img src={WinV7} width="100%" alt="Window" />
        <div class="pruebaTv7">
          <p>{this.state.title}</p>
        </div>
        <div class="pruebaMv7">
          <p>{this.state.text}</p>
        </div>
      </div>
    ];

    //Type message version




    switch (this.state.dogType) {

      case 'Windows3.1':

        return win31;

      case 'Windows95/98':

        return win9x;

      case 'WindowsME/2000':

        return win2000ME;

      case 'WindowsXP':

        return winXP;

      case 'WindowsVista/7':

        return winV7;

      case 'Windows8/8.1':

        return win881;

      case 'Windows10':

        return win10;

      default:

        return win31;

    }

  }

  renderSwitch() {

    var one = [
      <div>
        <div class="form-group">
          <label>botton 1</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB1.bind(this)} />
        </div>
      </div>
    ];

    var two = [
      <div>
        <div class="form-group">
          <label>botton 1</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB1.bind(this)} />
        </div>

        <div class="form-group">
          <label>botton 2</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB2.bind(this)} />
        </div>
      </div>
    ];

    var three = [
      <div>
        <div class="form-group">
          <label>botton 1</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB1.bind(this)} />
        </div>

        <div class="form-group">
          <label>botton 2</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB2.bind(this)} />
        </div>

        <div class="form-group">
          <label>botton 3</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB3.bind(this)} />
        </div>
      </div>
    ];

    var four = [
      <div>
        <div class="form-group">
          <label>botton 1</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB1.bind(this)} />
        </div>

        <div class="form-group">
          <label>botton 2</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB2.bind(this)} />
        </div>

        <div class="form-group">
          <label>botton 3</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB3.bind(this)} />
        </div>

        <div class="form-group">
          <label>botton 4</label><br />
          <input type="text" class="form-control" onKeyUp={this.handleSubmitB4.bind(this)} />
        </div>
      </div>
    ];

    var none = [
      <div>

      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImg31() {
    var one = [
      <div class="w311">
        <img src={button31} alt="" class="boton31" />
        <div class="b131">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div class="w312">
        <img src={button31} alt="" class="boton31" />
        <img src={button31} alt="" class="boton231" />
        <div class="b131">
          <p>{this.state.b1}</p>
        </div>
        <div class="b231">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div class="w313">
        <img src={button31} alt="" class="boton31" />
        <img src={button31} alt="" class="boton231" />
        <img src={button31} alt="" class="boton331" />
        <div class="b131">
          <p>{this.state.b1}</p>
        </div>
        <div class="b231">
          <p>{this.state.b2}</p>
        </div>
        <div class="b331">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div class="w314">
        <img src={button31} alt="" class="boton31" />
        <img src={button31} alt="" class="boton231" />
        <img src={button31} alt="" class="boton331" />
        <img src={button31} alt="" class="boton431" />
        <div class="b131">
          <p>{this.state.b1}</p>
        </div>
        <div class="b231">
          <p>{this.state.b2}</p>
        </div>
        <div class="b331">
          <p>{this.state.b3}</p>
        </div>
        <div class="b431">
          <p>{this.state.b4}</p>
        </div>
      </div>
    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImg9x() {
    var one = [
      <div class="w9x1">
        <img src={button9x} alt="" class="boton9x" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div class="w9x2">
        <img src={button9x} alt="" class="boton9x" />
        <img src={button9x} alt="" class="boton29x" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div class="w9x3">
        <img src={button9x} alt="" class="boton9x" />
        <img src={button9x} alt="" class="boton29x" />
        <img src={button9x} alt="" class="boton39x" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div class="w9x4">
        <img src={button9x} alt="" class="boton9x" />
        <img src={button9x} alt="" class="boton29x" />
        <img src={button9x} alt="" class="boton39x" />
        <img src={button9x} alt="" class="boton49x" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3">
          <p>{this.state.b3}</p>
        </div>
        <div class="b4">
          <p>{this.state.b4}</p>
        </div>
      </div>
    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImg2000() {
    var one = [
      <div class="w20001">
        <img src={button2000} alt="" class="boton2000" />
        <div class="b12000">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div class="w20002">
        <img src={button2000} alt="" class="boton2000" />
        <img src={button2000} alt="" class="boton22000" />
        <div class="b12000">
          <p>{this.state.b1}</p>
        </div>
        <div class="b22000">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div class="w20003">
        <img src={button2000} alt="" class="boton2000" />
        <img src={button2000} alt="" class="boton22000" />
        <img src={button2000} alt="" class="boton32000" />
        <div class="b12000">
          <p>{this.state.b1}</p>
        </div>
        <div class="b22000">
          <p>{this.state.b2}</p>
        </div>
        <div class="b32000">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div class="w20004">
        <img src={button2000} alt="" class="boton2000" />
        <img src={button2000} alt="" class="boton22000" />
        <img src={button2000} alt="" class="boton32000" />
        <img src={button2000} alt="" class="boton42000" />
        <div class="b12000">
          <p>{this.state.b1}</p>
        </div>
        <div class="b22000">
          <p>{this.state.b2}</p>
        </div>
        <div class="b32000">
          <p>{this.state.b3}</p>
        </div>
        <div class="b42000">
          <p>{this.state.b4}</p>
        </div>
      </div>
    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImgxp() {
    var one = [
      <div class="wxp1">
        <img src={buttonXP} alt="" class="botonxp" />
        <div class="b1xp">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div class="wxp2">
        <img src={buttonXP} alt="" class="botonxp" />
        <img src={buttonXP} alt="" class="boton2xp" />
        <div class="b1xp">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2xp">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div class="wxp3">
        <img src={buttonXP} alt="" class="botonxp" />
        <img src={buttonXP} alt="" class="boton2xp" />
        <img src={buttonXP} alt="" class="boton3xp" />
        <div class="b1xp">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2xp">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3xp">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div class="wxp4">
        <img src={buttonXP} alt="" class="botonxp" />
        <img src={buttonXP} alt="" class="boton2xp" />
        <img src={buttonXP} alt="" class="boton3xp" />
        <img src={buttonXP} alt="" class="boton4xp" />
        <div class="b1xp">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2xp">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3xp">
          <p>{this.state.b3}</p>
        </div>
        <div class="b4xp">
          <p>{this.state.b4}</p>
        </div>
      </div>
    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImg7() {
    var one = [
      <div class="wv71">
        <img src={buttonV7} alt="" class="botonv7" />
        <div class="b1v7">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div class="wv72">
        <img src={buttonV7} alt="" class="botonv7" />
        <img src={buttonV7} alt="" class="boton2v7" />
        <div class="b1v7">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2v7">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div class="wv73">
        <img src={buttonV7} alt="" class="botonv7" />
        <img src={buttonV7} alt="" class="boton2v7" />
        <img src={buttonV7} alt="" class="boton3v7" />
        <div class="b1v7">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2v7">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3v7">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div class="wv74">
        <img src={buttonV7} alt="" class="botonv7" />
        <img src={buttonV7} alt="" class="boton2v7" />
        <img src={buttonV7} alt="" class="boton3v7" />
        <img src={buttonV7} alt="" class="boton4v7" />
        <div class="b1v7">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2v7">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3v7">
          <p>{this.state.b3}</p>
        </div>
        <div class="b4v7">
          <p>{this.state.b4}</p>
        </div>
      </div>
    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImg881() {
    var one = [
      <div class="w8811">
        <img src={button881} alt="" class="boton881" />
        <div class="b1881">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div class="w8812">
        <img src={button881} alt="" class="boton881" />
        <img src={button881} alt="" class="boton2881" />
        <div class="b1881">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2881">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div class="w8813">
        <img src={button881} alt="" class="boton881" />
        <img src={button881} alt="" class="boton2881" />
        <img src={button881} alt="" class="boton3881" />
        <div class="b1881">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2881">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3881">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div class="w8814">
        <img src={button881} alt="" class="boton881" />
        <img src={button881} alt="" class="boton2881" />
        <img src={button881} alt="" class="boton3881" />
        <img src={button881} alt="" class="boton4881" />
        <div class="b1881">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2881">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3881">
          <p>{this.state.b3}</p>
        </div>
        <div class="b4881">
          <p>{this.state.b4}</p>
        </div>
      </div>
    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttomImg10() {
    var one = [
      <div>
        <img src={button10} alt="" class="boton" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
      </div>
    ];

    var two = [
      <div>
        <img src={button10} alt="" class="boton" />
        <img src={button10} alt="" class="boton2" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2">
          <p>{this.state.b2}</p>
        </div>
      </div>
    ];

    var three = [
      <div>
        <img src={button10} alt="" class="boton" />
        <img src={button10} alt="" class="boton2" />
        <img src={button10} alt="" class="boton3" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3">
          <p>{this.state.b3}</p>
        </div>
      </div>
    ];

    var four = [
      <div>
        <img src={button10} alt="" class="boton" />
        <img src={button10} alt="" class="boton2" />
        <img src={button10} alt="" class="boton3" />
        <img src={button10} alt="" class="boton4" />
        <div class="b1">
          <p>{this.state.b1}</p>
        </div>
        <div class="b2">
          <p>{this.state.b2}</p>
        </div>
        <div class="b3">
          <p>{this.state.b3}</p>
        </div>
        <div class="b4">
          <p>{this.state.b4}</p>
        </div>
      </div>

    ];

    var none = [
      <div>
      </div>
    ];

    switch (this.state.catType) {
      case '1':

        return one;

      case '2':

        return two;

      case '3':

        return three;
      case '4':

        return four;
      case 'none':

        return none;

      default:

        return none;

    }
  }

  buttonVersion() {
    var w31 = [
      <div>
        {this.buttomImg31()}
      </div>
    ];

    var w881 = [
      <div>
        {this.buttomImg881()}
      </div>
    ];

    var w9x = [
      <div>
        {this.buttomImg9x()}
      </div>
    ];

    var w10 = [
      <div>
        {this.buttomImg10()}
      </div>
    ];

    var w2000ME = [
      <div>
        {this.buttomImg2000()}
      </div>
    ];

    var wXP = [
      <div>
        {this.buttomImgxp()}
      </div>
    ];

    var w7 = [
      <div>
        {this.buttomImg7()}
      </div>
    ];

    switch (this.state.dogType) {

      case 'Windows3.1':

        return w31;

      case 'Windows95/98':

        return w9x;

      case 'WindowsME/2000':

        return w2000ME;

      case 'WindowsXP':

        return wXP;

      case 'WindowsVista/7':

        return w7;

      case 'Windows8/8.1':

        return w881;

      case 'Windows10':

        return w10;

      default:

        return w31;

    }
  }

  typeStatusVersion() {
    var w31 = [
      <div>
        {this.statusW31()}
      </div>
    ];

    var w881 = [
      <div>
        {this.statusW881()}
      </div>
    ];

    var w9x = [
      <div>
        {this.statusW9x()}
      </div>
    ];

    var w10 = [
      <div>
        {this.statusW10()}
      </div>
    ];

    var w2000ME = [
      <div>
        {this.statusW2000ME()}
      </div>
    ];

    var wXP = [
      <div>
        {this.statusWXP()}
      </div>
    ];

    var w7 = [
      <div>
        {this.statusWVISTA7()}
      </div>
    ];

    switch (this.state.dogType) {

      case 'Windows3.1':

        return w31;

      case 'Windows95/98':

        return w9x;

      case 'WindowsME/2000':

        return w2000ME;

      case 'WindowsXP':

        return wXP;

      case 'WindowsVista/7':

        return w7;

      case 'Windows8/8.1':

        return w881;

      case 'Windows10':

        return w10;

      default:

        return w31;

    }
  }


  render() {

    return (

      <div class="col-md-12 text-center row">
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
          <div class="relative">

            {this.windowsSwitch()}
            {this.typeStatusVersion()}
            {this.buttonVersion()}


          </div>
          <br /><br />
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label>version: </label><br />
              <select name="version" class="form-control" id="type" onChange={this.windowsModel.bind(this)}>
                <option value="Windows3.1">Windows 3.1</option>
                <option value="Windows95/98">Windows 95/98</option>
                <option value="WindowsME/2000">Windows ME/2000</option>
                <option value="WindowsXP">Windows XP</option>
                <option value="WindowsVista/7">Windows Vista/7</option>
                <option value="Windows8/8.1">Windows 8/8.1</option>
                <option value="Windows10">Windows 10</option>
              </select>
            </div>

            <div class="form-group">
              <label>type: </label><br />
              {this.typeVersion()}
            </div>

            <div class="form-group">
              <label>Title message: </label><br />
              <input type="text" class="form-control" onKeyUp={this.handleSubmitTitle.bind(this)} />
            </div>

            <div class="form-group">
              <label>Message: </label><br />
              <textarea class="form-control" onKeyUp={this.handleSubmitText.bind(this)} />
            </div>

            <div class="form-group">
              <label>Numero button </label><br />
              <select class="form-control" id="button" onChange={this.changeModel.bind(this)}>
                <option value="none">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div id="button_number">
              {this.renderSwitch()}
            </div>
            {
              //<input type="button" value="generate" class="btn btn-primary" /*onClick={this.generate.bind(this)}  */ />
            }
          </form>
        </div>
        <div class="col-md-4">

        </div>
      </div>
    );
  }
}

export default Body;