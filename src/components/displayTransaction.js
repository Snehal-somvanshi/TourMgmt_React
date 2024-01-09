import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "../CSS/Style.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function DisplayTransaction() {

    const [allTransaction, setallTransaction] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [Amount, setAmount] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    useEffect(() => {
        fetch("https://localhost:7074/api/Transactions")
            .then(resp => resp.json())
            .then(trans => setallTransaction(trans))

    }, []);


    const navigate = useNavigate();

    const handleSearchClick = () => {

        fetch("https://localhost:7074/api/Transactions/ondate?dateStart=" + startDate + "&dateEnd=" + endDate)
            .then(resp => resp.json())
            .then(trans => setallTransaction(trans))

    }

    const handleAmountClick = () => {

        fetch("https://localhost:7074/api/Transactions/onamount?amount=" + Amount)
            .then(resp => resp.json())
            .then(trans => setallTransaction(trans))

    }


    return (
        <div>
            <Row>
                <Col>
                    <table><tr><td><label>Start Date:</label></td>
                        <td><input type="date" value={startDate} onChange={handleStartDateChange} />
                        </td>
                        <td><label>
                            End Date:</label></td>
                        <td><input type="date" value={endDate} onChange={handleEndDateChange} />
                        </td>
                        <td><button onClick={handleSearchClick}>Search</button></td>

                    </tr></table>

                </Col>
            </Row>
            <Row>
                <Col>
                    <table><tr><td><label>Amount:</label></td>
                        <td><input type="number" value={Amount} onChange={handleAmountChange} />
                        </td>
                        <td><button onClick={handleAmountClick}>Filter Amount</button></td>

                    </tr></table>

                </Col>
            </Row>

            <Container fluid>
                <Row>
                    <Col>
                        <h1>Display Transactions</h1>
                        <br></br>
                        <table className="c-disppackagetable">
                            <tr>

                                <th>transactionId</th>
                                <th>amount</th>
                                <th>paymentdate</th>
                                <th>paymenttype</th>
                            </tr>
                            {
                                allTransaction.map((alltr, i) => {
                                    return <tr>
                                        <td>{alltr.transactionId}</td>
                                        <td><b>{alltr.amount}</b></td>
                                        <td>{alltr.paymentdate}</td>
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

