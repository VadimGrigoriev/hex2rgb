import { useState } from 'react';
import convertToRgb from '../utils/convertToRgb';

const ColorConverter = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [rgb, setRgb] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleInputChange = (event) => {
    const input = event.target.value;
    setColor(input);

    if (input.length === 7) {
      const regex = /^#[0-9A-F]{6}$/i.test(input);
      if (regex) {
        setRgb(convertToRgb(input));
        setError(false);
        setBackgroundColor(input);
      } else {
        setError(true);
        setBackgroundColor('#ff4c4c');
        setRgb('')
      }
    } else {
      setError(false);
    }

  }

  return (
    <div className='container' style={{ backgroundColor }}>
      <div className='color-container'>
        <input 
          type="text"
          value={color}
          onChange={handleInputChange}
          placeholder='Введите HEX цвет'
          maxLength='7'
          className='color-input'
        />
        <div className='result'>
          {error ? (
            <div className='error'>
              Ошибка!
            </div>
          ) : (
            <div className='success'>
              {rgb ? rgb : 'Введите цвет в формате HEX'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorConverter;
