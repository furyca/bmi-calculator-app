import { Box, Button, Typography } from '@mui/material'
import { useContext } from 'react';
import { Context } from '../context/Context';
import { nanoid } from 'nanoid';

const History = () => {
  const context = useContext(Context)

  const clearHistory = () => {
    localStorage.clear()
    context.setRecordList([])
  }

  return (
    <Box sx={{width: {xs: '100%', md: '75%'}, textAlign: 'center', p: {xs: 0, md: 5}}}>
      <Box sx={{mb: 5}}>
        {context.recordList.map(record => {
          return (
            <Box key={nanoid()} sx={{display: 'flex', justifyContent: 'space-around'}}>
              <Typography noWrap p={2}>{record.date}</Typography>
              <Typography variant='h6' noWrap p={2} mb={2}>{record.value} kg/m²</Typography>
            </Box>
          )
        })}
      </Box>
      <Button variant='contained' size='lg' onClick={clearHistory}>Clear</Button>
    </Box>
  );
}

export default History