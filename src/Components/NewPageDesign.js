
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
 
  <Grid container>
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Item>
                  <h4>Sample Text </h4>
                  <hr />
                  <p>
                  Sample Text Sample Text Sample Text ample TextSample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
                  </p>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
                  <h4>Sample Text 2 </h4>
                  <hr />
                  <p>
                  Sample Text Sample Text Sample Text ample TextSample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
                  </p>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
                  <h4>Sample Text 3 </h4>
                  <hr />
                  <p>
                  Sample Text Sample Text Sample Text ample TextSample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
                  </p>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
                  <h4>Sample Text 4 </h4>
                  <hr />
                  <p>
                  Sample Text Sample Text Sample Text ample TextSample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
                  </p>
                 
            </Item>
        </Grid>
       
        <Grid item xs={8}>
        <Item>
                  <h4>Sample Text 8 </h4>
                  <hr />
                  <p>
                  Sample Text Sample Text Sample Text ample TextSample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
                  </p>
            </Item>
        </Grid>
      </Grid>
    </Box>

       

      </Grid>
    
  );
}
