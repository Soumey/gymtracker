
import './App.css';

import Image from 'react-bootstrap/Image'
import musclesF from './assets/Muscles.png'
import musclesB from './assets/MusclesBack.png'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { TCategory, getCategories } from './api/getCategories';
function App() {
  // 16 przyciskow
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [categoriesArray, setCategoriesArray] = useState<string[]>([])
  useEffect(() => {
    async function fetchCategories() {
      const newCategories = await getCategories();
      setCategories(newCategories);

      const title = newCategories.map(category => category._id);
      setCategoriesArray(title);
    }
    fetchCategories();
  }, []);


  return (
    <div className="app">
      <div className="image-container">
        <div className="front">
          <Image fluid src={musclesF} style={{ minHeight: '500px', minWidth: '300px' }} />
          <Button variant="success" size="sm" className="btnTraps rounded-circle" title='Traps' href={`/categories/${categoriesArray[0]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }} ></Button>
          <Button variant="success" size="sm" className="btnChest rounded-circle" title='Chest' href={`/categories/${categoriesArray[1]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnAbs rounded-circle" title='ABS' href={`/categories/${categoriesArray[7]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnQuads rounded-circle" title='Quads' href={`/categories/${categoriesArray[8]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnBiceps rounded-circle" title='Biceps' href={`/categories/${categoriesArray[2]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnObliques rounded-circle" title='Obliques' href={`/categories/${categoriesArray[6]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnFrontShoulders rounded-circle" title='Front of shoulders' href={`/categories/${categoriesArray[13]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnForearms rounded-circle" title='Forearms' href={`/categories/${categoriesArray[4]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnHands rounded-circle" title='Hands' href={`/categories/${categoriesArray[5]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
        </div>
        <div className="back">
          <Image fluid src={musclesB} style={{ minHeight: '500px', minWidth: '300px' }} />
          <Button variant="success" size="sm" className="btnTrapsBack rounded-circle" title='Back of traps' href={`/categories/${categoriesArray[0]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnLats rounded-circle" title='Lats' href={`/categories/${categoriesArray[10]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnGlutes rounded-circle" title='Glutes' href={`/categories/${categoriesArray[11]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnHamstrings rounded-circle" title='Hamstrings' href={`/categories/${categoriesArray[12]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnTriceps rounded-circle" title='Triceps' href={`/categories/${categoriesArray[3]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnBackShoulders rounded-circle" title='Back of shoulders' href={`/categories/${categoriesArray[14]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
          <Button variant="success" size="sm" className="btnCalves rounded-circle" title='Calves' href={`/categories/${categoriesArray[9]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
