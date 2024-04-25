import { useState } from 'react';
import axiosRes from '../../api/axiosRes';
import './index.scss'
import Backtohome from '../../component/backHome';
import Button from '../../component/button';

const Commentemail = () => {
    const [inputVal, setInputVal] = useState('');
    const [commentData, setCommentData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inputVal', inputVal);
        axiosRes(
            'https://jsonplaceholder.typicode.com/comments',
            (res) => {
                const data = res.data;
                let newData = data.filter((val) => {
                    var str = val.email;
                    var splitEmail = str.split("@")[1]; 
                    return splitEmail.includes(inputVal) ? val : '';
                });
                console.log('data', newData);
                setCommentData(newData);
            },
            (err) => {
                alert('Error With the API');
            }
        );
    }
  return (
    <div>
        <Backtohome />
        <form onSubmit={handleSubmit} className='input'>
            <input type='text' value={inputVal} onChange={(e) => {setInputVal(e.target.value)}} placeholder='Enter Domain'/>
            <Button btnColor="green" value="Submit" />
        </form>
        {
            commentData.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            commentData.map((data, ind)=> {
                                return (
                                    <tr>
                                        <td>{ind + 1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.body}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            : <h2>Data Not Foud</h2>
        }
    </div>
  );
}

export default Commentemail;
