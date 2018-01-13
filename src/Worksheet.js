import React, { Component } from 'react';
import './Worksheet.css';

class Worksheet extends Component{
  render(){
    return(
      <div className="Worksheet">
        <h1>CS 111 Practice</h1>
        <h3>Decimal to Binary (1 - 100)</h3>

        <div id='decimalToBinary'>
          <span id='dtb_binary_number'></span>
          <br/>
          <input type='number' id='dtb_response'></input><span id='dtb_correctness'></span>
          <br/>
          <button id='dtb_check_response'>Check</button>
          <button id='dtb_next'>Next</button>
        </div>

        <br/>
        <br/>
        <hr/>


        <h3>Binary to Decimal (1 - 100)</h3>

        <div id='binaryToDecimal'>
          <span id='btd_binary_number'></span>
        <br/>
          <input type='number' id='btd_response'></input><span id='btd_correctness'></span>
        <br/>
          <button id='btd_check_response'>Check</button>
          <button id='btd_next'>Next</button>
        </div>

        <br/>
        <br/>
        <hr/>


        <h3>Truth Tables</h3>

        <div id='truth_table'>
          <span id='tt_expression'></span>
          <br/>
          <span id='tt_correctness'></span>
        <br/>
          <button id='tt_check_response'>Check</button>
          <button id='tt_next'>Next</button>

          <table id='tt_response_table'>
          </table>
        </div>

        <br/>
        <br/>
        <hr/>


        <h3>Boolean Logic</h3>

        <div id='boolean_logic'>
          <span id='bl_expression'></span>
          <br/>
          <span id='bl_correctness'></span>
         <br/>
          <button id='bl_check_response'>Check</button>
          <button id='bl_next'>Next</button>

          <table id='bl_response_table'>
          </table>
        </div>
      </div>
    );
  }
}
export default Worksheet;
