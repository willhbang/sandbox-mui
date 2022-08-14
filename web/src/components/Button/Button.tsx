import _Button from '@mui/material/Button';

const Button = ({ children }) => {
  return (
    <_Button variant="contained" sx={{
      // width: 300
      textTransform: 'initial'
    }}>{ children }</_Button>
  )
}

export default Button
