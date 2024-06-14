import React, { useState } from 'react';
import { Slider, styled } from '@mui/material';

const CustomSlider = styled(Slider)({
    color: '#0cce6b',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
        background: 'linear-gradient(135deg, #16bac5 0%, #0cce6b 100%)',
    },
    '& .MuiSlider-rail': {
        opacity: 0.28,
        background: '#bfbfbf',
    },
    '& .MuiSlider-thumb': {
        height: 16,
        width: 16,
        backgroundColor: 'linear-gradient(135deg, #16bac5 0%, #0cce6b 100%)',
        border: '2px solid currentColor',
        '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'inherit',
        },
    },
});

export const  CatalogFilterSlider = () => {
    const [value, setValue] = useState([0, 50]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };

    return (
        <div style={{ width: '100%', margin: '0 auto', padding: '15px 0 33px 0' }}>
            <CustomSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );
}


