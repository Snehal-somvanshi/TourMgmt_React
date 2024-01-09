import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "../CSS/Style.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function GetTransactions() {

    const [allTransactions, setallTransactions] = useState([]);
    const [startdate, setStartDate] = useState('');
    const [enddate, setEndDate] = useState('');
    const [amount, setAmount] = useState('');

    const handleStartDateChange=(event)=>{
        setStartDate(event.target.value);

    };
    const handleEndDateChange=(event)=>{
        setEndDate(event.target.value);

    };
    const handleAmountChange=(event)=>{
        setAmount(event.target.value);

    };

    
    useEffect(() => {
        fetch("https://localhost:7096/api/Transactions")
            .then(resp => resp.json())
            .then(trans => setallTransactions(trans))

    }, []);

    const handelSearchClick=()=>
    {
        fetch("https://localhost:7096/api/Transactions/ondate?startdate="+startdate+"&enddate="+enddate)
            .then(resp => resp.json())
            .then(trans => setallTransactions(trans))
    }

    const handelAmountClick=()=>
    {
        fetch("https://localhost:7096/api/Transactions/onamount?amount="+amount)
            .then(resp => resp.json())
            .then(trans => setallTransactions(trans))
    }
    const navigate = useNavigate();
    return (
        <div>

            <Container fluid>
            <Row>
                    <Col>
                    <table><tr>
                        <td><label>Start Date: </label></td>
                        <td><input type="date" value={startdate} onChange={handleStartDateChange}></input></td>
                        <td><label>End Date: </label></td>
                        <td><input type="date" value={enddate} onChange={handleEndDateChange}></input></td>
                        <td><button onClick={handelSearchClick}>Search</button></td>
                    </tr>
                    <tr><td><label>Amount: </label></td>
                        <td><input type="number" value={amount} onChange={handleAmountChange}></input></td>
                        <td><button onClick={handelAmountClick}>Filter on Amount</button></td>
                   </tr></table>
                    </Col>
                    </Row>
                <Row>
                    <Col>
                        <h1>Transactions</h1>
                        <br></br>
                        <table className="c-disppackagetable">
                            <tr>
                                <th>transactionId</th>
                                <th>Amount</th>
                                <th>Payment Date</th>
                                <th>Payment Type</th>
                            </tr>
                            {
                                allTransactions.map((alltr, i) => {
                                    return <tr>
                                        <td>{alltr.transactionId}</td>
                                        <td><b>{alltr.amount}</b></td>
                                        <td>{alltr.paymentdate} Days</td>
                                        <td>{alltr.paymenttype}</td>
                                    </tr>
                                })
                            }
                        </table>

                    </Col>
                </Row>
            </Container>

        </div>

    )
}







