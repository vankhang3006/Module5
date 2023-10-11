import Image from 'next/image'
import {Inter} from 'next/font/google'
import axios from "axios";

export default function Home({covidData}) {
    return (

        <>
            <h1>Vietnam's COVID-19 Information</h1>
            <table className='table'>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Confirmed </td>
                    <td>Active </td>
                    <td>Recovered </td>
                    <td>Deaths</td>
                </tr>
                </thead>
                <tbody>
                {covidData.map((covid,key) =>(
                    <tr key={key}>
                        <td>{covid.Date}</td>
                        <td>{covid.Confirmed}</td>
                        <td>{covid.Active}</td>
                        <td>{covid.Recovered}</td>
                        <td>{covid.Deaths}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}
export const getStaticProps = async () => {
    try {
        const response = await axios.get('http://localhost:8080/covids');
        const covidData = response.data
        return {
            props: {
                covidData: covidData
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                covidData: [],
            }
        }
    }

}


/*export const getStaticProps = async () =>{
  try{
    const response = await axios.get('http://localhost:8080/covid');
    const data = response.data[response.data.length-1]
    return{
      props : {
        covidData : {
          Date : data.Date,
          Confirmed : data.Confirmed,
          Active : data.Active,
          Recovered: data.Recovered,
          Deaths: data.Deaths,
        }
      }
    }catch (e) {
        console.log(e)
        return {
            props: {
                covidData: {
                    Date: 'null',
                    Confirmed: 0,
                    Active: 0,
                    Recovered: 0,
                    Deaths: 0,
                }
            }
        }
    }*/