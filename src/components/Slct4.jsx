import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Slct4() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        
        <Select
          
          value={age}
          
          onChange={handleChange}
        >
          <MenuItem value={'アンドロメダ'}>アンドロメダ</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl sx={{ m: 0, minWidth: 120 ,}}>
        <Select
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'アンドロメダ'}>アンドロメダ</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
    </div>
  );
}