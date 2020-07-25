import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import { fetchCountries } from '../../api'

import styles from "./CountryPicker.module.css"

const CountryPicker = ({ handleCountryChange }) => {

    const [countriesData,setCountriesData] = useState([])

    useEffect(() => {
        const fetchApiCountries = async () => {
            setCountriesData(await fetchCountries())
        }
        
        fetchApiCountries()

    // When we select a different country the "useEffect" will be called again
    },[setCountriesData])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countriesData.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;