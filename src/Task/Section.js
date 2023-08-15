import React, { useState } from 'react'
import { Accordion,  Col,  Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';


function Task3() {

    const [formdata, setFormdata] = useState({
        secName: '',
        secDetails: ''
    });
    const [data, setData] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value);
        setFormdata((prev) => ({ ...prev, id: uuidv4(), [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formdata])
    }
    return (
        <>
            <Container className='p-5 mt-5 border border-danger'>
                <Row>
                    <Col xs={4} className='border border-info p-4'>
                        <form onSubmit={handleSubmit}>
                            <h3>Add Section</h3>
                            <div className="form-group ">
                                <label >Section Header</label>
                                <input className="form-control border border-black"
                                    type='text'name='secName'value={formdata.secName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3 mb-4">
                                <label >Section Details</label>
                                <textarea
                                    className="form-control border border-black" rows="3"
                                    type='text' name='secDetails' value={formdata.secDetails}
                                    onChange={handleChange}>
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 ">Add</button>
                        </form>
                    </Col>
                    <Col>
                        {data.map((ele,i) => {
                            return <Accordion key={i}>
                                <Accordion.Item eventKey={ele.id}>
                                    <Accordion.Header>{ele.secName}</Accordion.Header>
                                    <Accordion.Body>
                                        {ele.secDetails}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        })}
                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default Task3


// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';

// function Example() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//       >
//         click
//       </Button>
//       <Collapse in={open}>
//         <div id="example-collapse-text">
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Collapse>
//     </>
//   );
// }

// export default Example;