
import { Button, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react'

function Quotes() {
    const [quotes, setQuotes] = useState()
    // const [show, setshow] = useState()
   
    const generate = async () => {
        const num = Math.floor(Math.random() * 31)
        console.log(num);
        const result = await fetch(`https://dummyjson.com/quotes/${num}`)
            .then(result => result.json())
            .then((data) => {
                const display = {
                    quote: `${data.quote}`,
                    author:`${data.author}`
                }
                setQuotes(display)
           })
        console.log(result);
        // setQuotes(result)
    }
  return (
      <div>
          <Row>
              <Col>  
                  <center>  <h1 style={{ marginTop: '200px', color: 'green' }}>Quote Generator</h1>
                      <p style={{textAlign:'justify',width:'400px',marginleft:"250px",color:'white',fontSize:"12px",marginTop:'25px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque numquam iste accusantium, reiciendis eligendi ipsum aut ratione totam maxime distinctio earum iure? Pariatur excepturi cupiditate maxime, laboriosam veritatis totam.</p>
                  <h6 style={{ marginTop:'10px',color:'white'}}>Click To Generate Quotes</h6> </center>
                  <center> <Button onClick={(e) => generate()} style={{ marginTop: '10px', width: '250px' }} variant="outline-warning" className='btn align-items-center justify-content-center '>Generate</Button> </center>
              </Col>
              <Col>
                  {
                      quotes && (
                       <center>   <div className="lines  align-items-center justify-content-between text-warning shadow rounded  p-5" style={{ width: '400px', marginTop: '220px', fontSize: '20px', fontFamily:'fantasy', border: "2px solid gray" }} >
                              <p>{quotes.quote}</p>
                             <i> <p className='name justify-conent-end align-item-end' style={{fontSize:'15px',justifyContent:'end',textAlign:'end',color:'gray'}}><i class="fa-solid fa-minus "></i>{quotes.author}</p> </i>
                          </div> </center>
                  )
                      
                  }
              </Col>
            </Row>
    </div>
  )
}

export default Quotes